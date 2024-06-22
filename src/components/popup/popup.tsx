import React from 'react'
import clsx from 'clsx'
import { uuid } from 'taomu-toolkit'

import { Transition, TransitionConfig, AnimationTypes } from '../transition'
import { useTaomuClassName, useInlineStyle, useEventListener } from '../../hooks'
import { popupStyled, PopupCssVars } from './popup.styled'
import { popupStore } from './popup.store'
import {
  setTargetRelativePosition,
  setCenterAbsolutePosition,
  getAbsoluteAnimation,
  lockBodyScroll,
  unlockBodyScroll,
} from './popup.utils'

export type PopupPositionBase = 'left' | 'right' | 'top' | 'bottom' | 'center'
export type PopupPositionType = PopupPositionBase | `${PopupPositionBase}-${PopupPositionBase}` | 'dialog-center'
export type PopupEqualWidthUnion = 'auto' | 'equal' | 'min-width' | 'max-width'

export interface PopupRectType {
  left?: number | string
  top?: number | string
  right?: number | string
  bottom?: number | string
  width?: number | string
  height?: number | string
}

export interface PopupProps extends BaseComponentType<PopupCssVars> {
  popupId?: string
  /** 显示状态 */
  show?: boolean
  /** 层级 */
  zIndex?: number
  /** 背景事件穿透 */
  backgroundEvent?: boolean

  /** 显示遮罩层 */
  overlay?: boolean
  /** 遮罩层 props */
  overlayProps?: ReactDivProps
  /** 遮罩层内置动画类型 */
  overlayAnimationType?: AnimationTypes
  /** 遮罩层动画配置 */
  overlayTransitionConfig?: TransitionConfig
  /** 遮罩层动画函数配置 */
  overlayTransitionOptions?: KeyframeEffectOptions

  /** content props */
  contentProps?: ReactDivProps
  /** 弹层内容内置动画类型 */
  contentAnimationType?: AnimationTypes
  /** 弹层内容出入场动画配置 */
  contentTransitionConfig?: TransitionConfig
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

  onBeforeEnter?: (el?: HTMLElement | null) => void
  onEnter?: (el: HTMLElement) => void
  onBeforeLeave?: (el: HTMLElement) => void
  onLeave?: () => void
}

export interface PopupRef {
  open: () => void
  close: () => void
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
      zIndex = 1000,
      backgroundEvent,
      escToClose = true,
      clickToClose = true,
      lockScroll,

      overlay = false,
      overlayProps = {},
      overlayAnimationType,
      overlayTransitionConfig,
      overlayTransitionOptions,

      contentProps = {},
      contentAnimationType,
      contentTransitionConfig,
      contentTransitionOptions,

      equalWidth,
      positionType,
      positionTargetElement,
      autoFixPosition = true,

      onBeforeEnter,
      onEnter,
      onBeforeLeave,
      onLeave,
      ...wrapProps
    },
    ref
  ) => {
    const contentRef = React.useRef<HTMLDivElement>(null)

    const popupClassName = useTaomuClassName(
      'popup',
      `position-${positionType || 'default'}`,
      {
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

    React.useImperativeHandle(ref, () => ({
      open: openPopup,
      close: closePopup,
    }))

    React.useEffect(() => {
      const outsideClickClose = clickToClose && (backgroundEvent || !overlay)

      if (outsideClickClose) {
        function outsideClickCloseHandler(e: MouseEvent) {
          if (!contentRef.current?.firstChild?.contains(e.target as Node)) {
            closePopup()
          }
        }

        setTimeout(() => {
          document.addEventListener('click', outsideClickCloseHandler)
        }, 0)
        return () => {
          document.removeEventListener('click', outsideClickCloseHandler)
        }
      }

      return undefined
    }, [])

    React.useEffect(() => {
      if (lockScroll) {
        lockBodyScroll()
      }

      return () => {
        if (lockScroll) {
          unlockBodyScroll()
        }
      }
    }, [lockScroll])

    React.useEffect(() => {
      if (show) {
        openPopup()
      } else {
        closePopup()
      }
    }, [show])

    function openPopup() {
      setShowOverlay(true)
      setShowContent(true)
    }

    function closePopup() {
      setShowOverlay(false)
      setShowContent(false)
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
        <Transition
          show={showOverlay}
          animationType={overlayAnimationType}
          config={overlayTransitionConfig}
          options={overlayTransitionOptions}
        >
          <div {...overlayProps}></div>
        </Transition>
      )
    }

    function handleBeforeEnter(el?: HTMLElement | null) {
      onBeforeEnter?.(el)
      autoContentPosition()
    }

    function autoContentPosition() {
      const contentElement = contentRef.current
      if (!contentElement) return

      if (positionType === 'dialog-center') {
        setCenterAbsolutePosition(contentElement)
        return
      }

      setTargetRelativePosition(positionTargetElement, contentElement, positionType, equalWidth)
    }

    function renderContent() {
      if (!children) return null

      const animationType = contentAnimationType || getAbsoluteAnimation(positionType, !!positionTargetElement)
      const transitionOptions: KeyframeEffectOptions = Object.assign(
        { duration: 400, easing: 'cubic-bezier(0.175, 0.82, 0.265, 1)' },
        contentTransitionOptions
      )

      contentProps.className = clsx(
        'popup-content',
        popupId,
        { 'target-relative-position': !!positionTargetElement },
        contentProps.className
      )

      return (
        <Transition
          show={showContent}
          proxyRef={contentRef}
          animationType={animationType}
          config={contentTransitionConfig}
          options={transitionOptions}
          onBeforeEnter={handleBeforeEnter}
          onEnter={onEnter}
          onLeave={onLeave}
          onBeforeLeave={onBeforeLeave}
        >
          <div {...contentProps}>{children}</div>
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
