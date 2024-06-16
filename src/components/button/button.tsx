import React from 'react'
import { isPromise } from 'taomu-toolkit'

import { useInlineStyle, useTaomuClassName } from '../../hooks'
import { buttonStyled, BtnCssVars } from './button.styled'
import { Progress } from '../progress'
import { Transition } from '../transition'

export type ButtonType = 'primary' | 'default' | 'warning' | 'danger' | 'link'
export type ButtonHtmlType = 'button' | 'submit' | 'reset'

export interface ButtonProps extends BaseComponentType<BtnCssVars> {
  /** 按钮类型 */
  type?: ButtonType
  /** 按钮宽度 */
  width?: number | string
  /** 按钮高度 */
  height?: number | string
  /** 按钮横向间距 */
  paddingX?: number | string
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
  /** 显示外轮廓 */
  showOutline?: boolean
  /** 加载状态 */
  loading?: boolean
  /** 如果 onClick 返回一个 promise, 则自动添加按钮 loading */
  autoLoading?: boolean
  /** 在 loading 结束后，自动聚焦 */
  autoFocus?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  cssVars,
  style,
  type = 'default',
  width,
  height,
  paddingX,
  showOutline = true,
  ghost,
  glass,
  loading,
  disabled,
  autoLoading = true,
  autoFocus = true,
  onClick,
  ...wrapProps
}) => {
  const btnRef = React.useRef<HTMLButtonElement>(null)
  const [insideLoading, setInsideLoading] = React.useState(false)
  const isLoading = loading || insideLoading
  let isDisabled = disabled || isLoading

  const btnClassName = useTaomuClassName(
    'btn',
    'flex flex-inline center',
    `btn-${type}`,
    {
      'show-outline': showOutline,
      'btn-ghost': ghost,
      'btn-glass': glass,
      'is-loading': isLoading,
    },
    className
  )
  const btnStyle = useInlineStyle({ btnWidth: width, btnHeight: height, btnPaddingX: paddingX, ...cssVars }, style)

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
        if (autoFocus) {
          setTimeout(() => {
            btnRef.current?.focus()
          }, 0)
        }
      })
    }
  }

  return (
    <button
      ref={btnRef}
      css={buttonStyled}
      className={btnClassName}
      style={btnStyle}
      disabled={isDisabled}
      onClick={handleClick}
      {...wrapProps}
    >
      {children}
      <Transition show={isLoading} animationType="throughRightFade">
        <div className="btn-loader-wrap">
          <Progress className="btn-loader" height={3} striped progress={100} cssVars={{ progressSpeed: '0.35s' }} />
        </div>
      </Transition>
    </button>
  )
}
