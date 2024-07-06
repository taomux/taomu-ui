import React from 'react'
import { hasSelectorLoopParent, Debounce } from 'taomu-toolkit'

import { useTaomuClassName } from '../../../hooks'

import { PopupPortal, PopupPortalOptions } from '../popup.portal'

export type TriggerType = 'click' | 'hover'

export interface PopupTriggerProps {
  /** 触发元素 */
  children: JSX.Element
  /** 弹出内容 */
  content?: PopupPortal['Content']
  /** 触发条件，默认: click  */
  trigger?: TriggerType
  /** 弹出位置 */
  position?: PopupPortalOptions['positionType']
  /** 传送门选项 */
  portalOptions?: PopupPortalOptions
  /** 防抖时间, 只在 trigger 为 hover 时生效 */
  debounceTime?: number
}

export const PopupTrigger = React.forwardRef<PopupPortal | void, PopupTriggerProps>(
  ({ children, content, trigger = 'hover', position = 'bottom', portalOptions, debounceTime = 150 }, ref) => {
    const popupPortalRef = React.useRef<PopupPortal | undefined>()
    const debounceRef = React.useRef(new Debounce())
    const [targetId, setTargetId] = React.useState<string | null>(null)
    const popupTriggerClassNames = useTaomuClassName('popup-trigger', targetId, children.props?.className)

    React.useImperativeHandle(ref, () => popupPortalRef.current)

    React.useEffect(() => {
      return () => {
        if (popupPortalRef.current) {
          popupPortalRef.current.destroy()
        }
      }
    }, [])

    React.useEffect(() => {
      if (content) {
        const nextPortalOptions: PopupPortalOptions = {
          positionType: position,
          ...portalOptions,
          clickToClose: trigger === 'click',
        }

        if (trigger === 'hover') {
          if (!nextPortalOptions.contentProps) {
            nextPortalOptions.contentProps = {}
          }
          const userOnMouseLeave = nextPortalOptions.contentProps.onMouseEnter
          nextPortalOptions.contentProps.onMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
            userOnMouseLeave?.(e)
            if (
              popupPortalRef.current &&
              e.relatedTarget &&
              hasSelectorLoopParent(e.relatedTarget as HTMLDivElement, '.' + popupPortalRef.current.popupId)
            ) {
              return
            }
            if (popupPortalRef.current) {
              popupPortalRef.current.isEnter = false // WARN 不干净的操作，为了解决鼠标从内容区移出后又快速移入 target 后弹层不显示的问题
            }
            closePopup()
          }
        }

        popupPortalRef.current = new PopupPortal(content, nextPortalOptions)
        setTargetId(popupPortalRef.current.popupId)
      } else {
        popupPortalRef.current = undefined
      }
    }, [content, portalOptions, trigger])

    function openPopup(el?: HTMLElement | null) {
      if (!popupPortalRef.current) {
        return console.warn('PopupPortal instance not found')
      }
      debounceRef.current.debounce(
        () => {
          popupPortalRef?.current?.open(portalOptions?.contentProps, { positionTargetElement: el, ...portalOptions })
        },
        trigger === 'hover' ? debounceTime : 0
      )
    }

    function closePopup() {
      debounceRef.current.debounce(
        () => {
          popupPortalRef.current?.close()
        },
        trigger === 'hover' ? debounceTime : 0
      )
    }

    const addProps: ReactDivProps = { className: popupTriggerClassNames }

    if (trigger === 'click') {
      addProps.onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        children.props?.onClick?.(e)
        if (popupPortalRef.current?.isEnter) {
          closePopup()
          return // 已打开状态不重复打开
        } else if (popupPortalRef.current?.isOpened) {
          popupPortalRef.current.destroy() // 未进场且已打开，这种情况属于关闭动画未结束，此时应该直接销毁弹层
        }
        openPopup(e.currentTarget || e.target)
      }
    } else if (trigger === 'hover') {
      addProps.onMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        children.props?.onMouseEnter?.(e)
        if (popupPortalRef.current?.isEnter) {
          return // 已打开状态不重复打开
        } else if (popupPortalRef.current?.isOpened) {
          popupPortalRef.current.destroy() // 未进场且已打开，这种情况属于关闭动画未结束，此时应该直接销毁弹层
        }
        openPopup(e.currentTarget || e.target)
      }

      addProps.onMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        children.props?.onMouseOut?.(e)
        if (
          popupPortalRef.current &&
          e.relatedTarget &&
          hasSelectorLoopParent(
            e.relatedTarget as HTMLDivElement,
            '.' + popupPortalRef.current.popupId,
            popupPortalRef.current.containerId
          )
        ) {
          return // 鼠标移开触发元素并进入弹层内容区域，不关闭弹层
        }
        closePopup()
      }
    }

    return React.cloneElement(children, { ...children.props, ...addProps })
  }
)
