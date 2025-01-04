import React from 'react'

import { useTaomuClassName, useInlineStyle } from '../../hooks'

import { toastStyled, ToastCssVars } from './toast.styled'

export interface ToastProps extends BaseComponentType<ToastCssVars> {}

export const Toast: React.FC<ToastProps> = ({ className, cssVars, style, ...wrapProps }) => {
  const toastClassNames = useTaomuClassName('toast', className)
  const toastStyle = useInlineStyle<ToastCssVars>(cssVars, style)

  return (
    <div className={toastClassNames} style={toastStyle} css={toastStyled} {...wrapProps}>
      <p>component toast is created</p>
    </div>
  )
}
