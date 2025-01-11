import React from 'react'
import clsx from 'clsx'
import { uuid } from 'taomu-toolkit'

import { Transition, type AnimationConfig } from '../transition'
import { useTaomuClassName, useInlineStyle, useEventListener } from '../../hooks'
import { popupStyled, type PopupCssVars } from './popup.styled'
import { popupStore } from './popup.store'
import {
  setTargetRelativePosition,
  setCenterAbsolutePosition,
  defaultPopupAnimationConfigBuilder,
  lockBodyScroll,
  unlockBodyScroll,
} from './popup.utils'

export type PopupPositionBase = 'left' | 'right' | 'top' | 'bottom' | 'center'
export type PopupPositionType = PopupPositionBase | `${PopupPositionBase}-${PopupPositionBase}` | 'dialog-center'
export type PopupEqualWidthUnion = 'auto' | 'equal' | 'min-width' | 'max-width'
export type PopupAnimationConfigBuilder = (positionType?: PopupPositionType, isTargetRelative?: boolean) => AnimationConfig

export interface PopupRectType {
  left?: number | string
  top?: number | string
  right?: number | string
  bottom?: number | string
  width?: number | string
  height?: number | string
}

export interface PopupProps extends ReactDivProps {
  cssVars?: PopupCssVars
  popupId?: string
  /** 显示状态 */
  show?: boolean
  /** 层级 */
  zIndex?: number
  /** 不脱离文档流 */
  noFixed?: boolean
  /** 背景事件穿透 */
  backgroundEvent?: boolean

  /** 显示遮罩层 */
  overlay?: boolean
  /** 遮罩层 props */
  overlayProps?: ReactDivProps
  /** 遮罩层内置动画类型 */
  overlayAnimationConfig?: AnimationConfig
  /** 遮罩层动画函数配置 */
  overlayTransitionOptions?: KeyframeEffectOptions

  /** contentWrapperProps */
  contentWrapperProps?: ReactDivProps
  /** 弹层内容内置动画类型 */
  contentAnimationConfig?: AnimationConfig
  /** 弹层内容动画函数配置 */
  contentTransitionOptions?: KeyframeEffectOptions

  /** 是否锁定滚动 */
  lockScroll?: boolean
  /** 按下 esc 关闭 */
  escToClose?: boolean
  /** 点击蒙层关闭 */
  clickToClose?: boolean

  /** 自定义坐标及尺寸 */
  rect?: PopupRectType
  /** 弹出层与目标元素等宽类型，默认 auto */
  equalWidth?: PopupEqualWidthUnion
  /** 自动定位目标元素 */
  positionTargetElement?: HTMLElement | null
  /** 自动定位类型 */
  positionType?: PopupPositionType
  /** 动态位置修正，默认开启，仅在 positionTargetElement 存在时生效 */
  autoFixPosition?: boolean
  /** 弹出内容边缘偏移量 */
  edgeOffset?: number

  /** 动态动画类型处理函数 */
  popupAnimationConfigBuilder?: PopupAnimationConfigBuilder

  onBeforeEnter?: (el?: HTMLElement | null) => void
  onEnter?: (el: HTMLElement) => void
  onBeforeLeave?: (el: HTMLElement) => void
  onLeave?: () => void
  onBackgroundClickClose?: () => void
  onEscClose?: () => void
  /** 关闭回调 */
  onClose?: () => void
}

export interface PopupRef {
  open: () => void
  close: () => void
  /** 控制关闭操作是否中断 */
  closeLockRef?: React.MutableRefObject<boolean>
}

export const POPUP_DEFAULT_RECT: PopupRectType = {
  left: 0,
  top: 0,
}

export const POPUP_ID_TEMPLATE = 'taomu-popup-xxxx-xxxx-xxxx'

export const Popup = React.forwardRef<PopupRef, PopupProps>(
  (
    {
      className,
      cssVars,
      style,
      popupId = uuid(POPUP_ID_TEMPLATE),
      children,
      show,
      noFixed,
      zIndex = 1000,
      backgroundEvent,
      escToClose = true,
      clickToClose = true,
      lockScroll,

      overlay = false,
      overlayProps = {},
      overlayAnimationConfig,
      overlayTransitionOptions,

      contentWrapperProps = {},
      contentAnimationConfig,
      contentTransitionOptions,

      equalWidth,
      positionType,
      positionTargetElement,
      autoFixPosition = true,
      edgeOffset,

      popupAnimationConfigBuilder = defaultPopupAnimationConfigBuilder,

      onBeforeEnter,
      onEnter,
      onBeforeLeave,
      onLeave,

      onBackgroundClickClose,
      onEscClose,
      onClose,

      ...wrapProps
    },
    ref
  ) => {
    const contentRef = React.useRef<HTMLDivElement>(null)
    const scrollLockedRef = React.useRef(false)
    const closeLockRef = React.useRef(false)

    const popupClassName = useTaomuClassName(
      'popup',
      `position-${positionType}`,
      {
        'no-fixed': noFixed,
        'position-absolute': !positionTargetElement,
        'background-event': backgroundEvent || !overlay,
      },
      className
    )
    const popupStyle = useInlineStyle<PopupCssVars>({ zIndex: zIndex.toString(), ...cssVars }, style)

    const [showOverlay, setShowOverlay] = React.useState(false)
    const [showContent, setShowContent] = React.useState(false)

    useEventListener(document, 'keydown', (e) => {
      if (e.key === 'Escape' && escToClose) {
        const { popupsMap } = popupStore.getState()
        const lastKey = Array.from(popupsMap.keys()).pop()
        if (lastKey === popupId) {
          closePopup()
          onEscClose?.()
        }
      }
    })

    useEventListener(window, 'resize', () => {
      if (autoFixPosition) {
        autoContentPosition()
      }
    })

    useEventListener(document, 'scroll', () => {
      if (autoFixPosition) {
        autoContentPosition()
      }
    })

    React.useImperativeHandle(ref, () => {
      return {
        open: openPopup,
        close: closePopup,
        closeLockRef,
      }
    })

    React.useEffect(() => {
      const outsideClickClose = clickToClose && (backgroundEvent || !overlay)

      if (lockScroll) {
        lockScrollOnce()
      }

      if (outsideClickClose) {
        function outsideClickCloseHandler(e: MouseEvent) {
          if (!contentRef.current?.firstChild?.contains(e.target as Node)) {
            closePopup()
            onBackgroundClickClose?.()
          }
        }

        setTimeout(() => {
          document.addEventListener('click', outsideClickCloseHandler)
        }, 0)
        return () => {
          unlockScrollOnce()
          document.removeEventListener('click', outsideClickCloseHandler)
        }
      }

      return () => {
        unlockScrollOnce()
      }
    }, [])

    React.useEffect(() => {
      if (show) {
        openPopup()
      } else {
        closePopup()
      }
    }, [show])

    function lockScrollOnce() {
      if (!scrollLockedRef.current) {
        lockBodyScroll()
        scrollLockedRef.current = true
      }
    }

    function unlockScrollOnce() {
      if (scrollLockedRef.current) {
        unlockBodyScroll()
        scrollLockedRef.current = false
      }
    }

    function openPopup() {
      setShowOverlay(true)
      setShowContent(true)
    }

    function closePopup() {
      if (closeLockRef.current === true) {
        console.warn('close action is locked')
        return
      }

      setShowOverlay(false)
      setShowContent(false)
      onClose?.()
    }

    function renderOverlay() {
      if (!overlay) return null

      overlayProps.className = clsx('popup-overlay', overlayProps.className)

      if (clickToClose) {
        const userOnClick = overlayProps.onClick
        overlayProps.onClick = (e) => {
          closePopup()
          userOnClick?.(e)
        }
      }

      return (
        <Transition show={showOverlay} animationConfig={overlayAnimationConfig} options={overlayTransitionOptions}>
          <div {...overlayProps}></div>
        </Transition>
      )
    }

    function handleBeforeEnter(el?: HTMLElement | null) {
      onBeforeEnter?.(el)
      setTimeout(() => {
        autoContentPosition()
      }, 0)
    }

    function handleBeforeLeave(el: HTMLElement) {
      onBeforeLeave?.(el)
      if (lockScroll) {
        unlockScrollOnce()
      }
    }

    function autoContentPosition() {
      const contentElement = contentRef.current
      if (!contentElement) return

      if (positionType === 'dialog-center') {
        setCenterAbsolutePosition(contentElement)
        return
      }

      setTargetRelativePosition(positionTargetElement, contentElement, positionType, equalWidth, edgeOffset)
    }

    function renderContent() {
      if (!children) return null

      const animationConfig = contentAnimationConfig ?? popupAnimationConfigBuilder(positionType, !!positionTargetElement)
      const transitionOptions: KeyframeEffectOptions = Object.assign(
        { duration: 300, easing: 'cubic-bezier(0.175, 0.82, 0.265, 1)' },
        contentTransitionOptions
      )

      contentWrapperProps.className = clsx(
        'popup-content',
        popupId,
        { 'target-relative-position': !!positionTargetElement },
        contentWrapperProps.className
      )

      return (
        <Transition
          show={showContent}
          proxyRef={contentRef}
          animationConfig={animationConfig}
          options={transitionOptions}
          onBeforeEnter={handleBeforeEnter}
          onEnter={onEnter}
          onBeforeLeave={handleBeforeLeave}
          onLeave={onLeave}
        >
          <div {...contentWrapperProps}>{children}</div>
        </Transition>
      )
    }

    return (
      <div className={popupClassName} style={popupStyle} css={popupStyled} {...wrapProps}>
        {renderOverlay()}
        {renderContent()}
      </div>
    )
  }
)
