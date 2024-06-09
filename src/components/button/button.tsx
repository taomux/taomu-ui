import React from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { isPromise } from 'taomu-toolkit'

import { useInlineStyle, useTaomuClassName } from '../../hooks'
import { buttonStyled, BtnCssVars } from './button.styled'
import { Progress } from '../progress'
import { buttonAutoAnimate } from './button.animate'

export type ButtonType = 'primary' | 'default' | 'warning' | 'danger' | 'link'
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
  /** 加载状态 */
  loading?: boolean
  /** 如果 onClick 返回一个 promise, 则自动添加按钮 loading */
  autoLoading?: boolean
  /** 显示外轮廓 */
  showOutline?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  cssVars,
  style,
  type = 'default',
  showOutline = true,
  ghost,
  glass,
  loading,
  disabled,
  autoLoading = true,
  onClick,
  ...wrapProps
}) => {
  const [parent] = useAutoAnimate(buttonAutoAnimate)
  const [insideLoading, setInsideLoading] = React.useState(false)
  const isLoading = loading || insideLoading
  let isDisabled = disabled || isLoading

  const btnClassName = useTaomuClassName(
    'btn',
    `btn-${type}`,
    {
      'show-outline': showOutline,
      'btn-ghost': ghost,
      'btn-glass': glass,
      'is-loading': isLoading,
    },
    className
  )
  const btnStyle = useInlineStyle(cssVars, style)

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (isDisabled) {
      e.preventDefault()
      return
    }

    const p = onClick?.(e)

    if (autoLoading && isPromise(p)) {
      setInsideLoading(true)
      p.finally(() => {
        setInsideLoading(false)
      })
    }
  }

  function renderLoader() {
    if (!isLoading) return null

    return (
      <div className="btn-loader-wrap">
        <Progress className="btn-loader" height={3} striped progress={100} cssVars={{ progressSpeed: '0.35s' }} />
      </div>
    )
  }

  return (
    <button
      ref={parent}
      css={buttonStyled}
      className={btnClassName}
      style={btnStyle}
      disabled={isDisabled}
      onClick={handleClick}
      {...wrapProps}
    >
      {children}
      {renderLoader()}
    </button>
  )
}
