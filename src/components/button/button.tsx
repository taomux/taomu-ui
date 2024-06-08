import React from 'react'

import { useInlineStyle, useTaomuClassName } from '../../hooks'
import { buttonStyled, BtnCssVars } from './button.styled'

export type ButtonType = 'primary' | 'default' | 'danger' | 'gray' | 'link'
export type ButtonHtmlType = 'button' | 'submit' | 'reset'

export interface ButtonProps extends ReactBaseType<BtnCssVars> {
  /** 按钮类型 */
  type?: ButtonType
  /** 使用 flex 替换 inline-flex */
  block?: boolean
  /** 幽灵按钮 */
  ghost?: boolean
  /** 半透明 + 毛玻璃效果 */
  glass?: boolean
  /** 原生按钮类型 */
  htmlType?: ButtonHtmlType
  /** 是否禁用 */
  disabled?: boolean
  /** 激活状态 */
  active?: boolean
  /** 加载器属性 */
  // loaderProps?: LoadingProps
  /** 加载状态 */
  loading?: boolean
  /** 如果 onClick 返回一个 promise, 则自动添加按钮 loading */
  autoLoading?: boolean
}

export const Button: React.FC<ButtonProps> = ({ children, className, cssVars, style, type = 'default', ...wrapProps }) => {
  const btnClassName = useTaomuClassName('btn', `btn-${type}`, className)
  const btnStyle = useInlineStyle(cssVars, style)

  return (
    <button css={buttonStyled} className={btnClassName} style={btnStyle} {...wrapProps}>
      {children}
    </button>
  )
}
