import React from 'react'

import { useTaomuClassName, useInlineStyle } from '../../hooks'
import { getShadowClassName, getBorderClassName, renderTypeIcon, MessageIconType } from '../../utils'
import { Loading } from '../loading'
import { IconX } from '../icons'
import type { PopupPortal } from '../popup'

import { toastStyled, ToastCssVars } from './toast.styled'

export type ToastType = MessageIconType | 'loading'
export interface ToastProps extends BaseComponentType<ToastCssVars> {
  /** 消息类型 */
  type?: ToastType
  /** 阴影 */
  shadow?: boolean | BaseSizeLevel
  /** 外边框 */
  outerBorder?: boolean | number
  /** 内容 */
  message?: string
  /** 是否显示关闭按钮 */
  showCloseButton?: boolean
  /** 由 PopupPortal 传入 */
  popupInstance?: PopupPortal
}

export const Toast: React.FC<ToastProps> = ({
  className,
  cssVars,
  style,
  shadow = true,
  outerBorder = true,
  message,
  type = 'info',
  showCloseButton = false,
  popupInstance,
  ...wrapProps
}) => {
  const toastClassNames = useTaomuClassName(
    'toast',
    'flex row center-v gap-8',
    getShadowClassName(shadow),
    getBorderClassName(outerBorder),
    className
  )
  const toastStyle = useInlineStyle<ToastCssVars>(cssVars, style)

  function renderIcon() {
    switch (type) {
      case 'loading':
        return <Loading weight={2} size={17} />

      default:
        return renderTypeIcon(type, 17)
    }
  }

  function renderCloseButton() {
    if (!showCloseButton) return null

    return (
      <div className="toast-close-btn flex center-v" onClick={() => popupInstance?.close()}>
        <IconX size={16} />
      </div>
    )
  }

  return (
    <div className={toastClassNames} style={toastStyle} css={toastStyled} {...wrapProps}>
      {renderIcon()}
      <div>{message}</div>
      {renderCloseButton()}
    </div>
  )
}
