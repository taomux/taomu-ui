import React from 'react'
import clsx from 'clsx'

import { useTaomuClassName, useInlineStyle } from '../../hooks'
import { getShadowClassName, getBorderClassName } from '../../utils'

import { toastStyled, ToastCssVars } from './toast.styled'

export interface ToastProps extends BaseComponentType<ToastCssVars> {
  /** 阴影 */
  shadow?: boolean | BaseSizeLevel
  /** 外边框 */
  outerBorder?: boolean | number
  /** 内容 */
  message?: string
}

export const Toast: React.FC<ToastProps> = ({
  className,
  cssVars,
  style,
  shadow = true,
  outerBorder = true,
  message,
  ...wrapProps
}) => {
  const toastClassNames = useTaomuClassName('toast', getShadowClassName(shadow), getBorderClassName(outerBorder), className)
  const toastStyle = useInlineStyle<ToastCssVars>(cssVars, style)

  return (
    <div className={toastClassNames} style={toastStyle} css={toastStyled} {...wrapProps}>
      <span>{message}</span>
    </div>
  )
}
