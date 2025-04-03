import React from 'react'
import { isPromise } from 'taomu-toolkit'

import { useInlineStyle, useTaomuClassName } from '../../hooks'
import { buttonStyled, BtnCssVars } from './button.styled'
import { Progress } from '../progress'
import { Transition } from '../transition'

export type ButtonType = 'primary' | 'default' | 'warning' | 'danger' | 'text'
export type ButtonHtmlType = 'button' | 'submit' | 'reset'

export interface ButtonProps
  extends BaseComponentType<BtnCssVars>,
    Omit<React.HTMLAttributes<HTMLButtonElement>, 'className' | 'onClick' | 'type'> {
  /** 按钮类型 */
  type?: ButtonType
  hoverType?: ButtonType
  /** 按钮宽度 */
  width?: number | string
  /** 按钮高度 */
  height?: number | string
  /** 按钮横向间距 */
  paddingX?: number | string
  /** 使用 flex 替换 inline-flex */
  block?: boolean
  /** 虚线边框 */
  dashed?: boolean
  /** 圆角 */
  radius?: number | string
  /** 圆形按钮 */
  round?: boolean
  /** 字体大小 */
  fontSize?: number | string
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
  hoverType,
  width,
  height,
  paddingX,
  fontSize,
  showOutline = true,
  ghost,
  glass,
  dashed,
  block,
  loading,
  disabled,
  autoLoading = true,
  autoFocus = true,
  radius,
  round,
  onClick,
  onMouseEnter,
  onMouseLeave,
  htmlType = 'button', // 默认值设为 'button'，如果不指定则在 form 中的所有 button 元素默认为 'submit'
  ...wrapProps
}) => {
  const btnRef = React.useRef<HTMLButtonElement>(null)
  const [insideLoading, setInsideLoading] = React.useState(false)
  const [isHover, setIsHover] = React.useState(false)
  const isLoading = loading || insideLoading
  let isDisabled = disabled || isLoading

  const btnTypeClassName = React.useMemo(() => {
    if (hoverType && isHover) return `btn-${hoverType}`
    return `btn-${type}`
  }, [isHover, type, hoverType])

  const btnClassName = useTaomuClassName(
    'btn',
    'flex center flex-none',
    block ? 'flex' : 'flex-inline',
    btnTypeClassName,
    {
      'show-outline': showOutline,
      'btn-ghost': ghost,
      'btn-glass': glass,
      'is-loading': isLoading,
      'dash-border': dashed,
    },
    className
  )
  const btnStyle = useInlineStyle(
    {
      btnWidth: block ? '100%' : width,
      btnHeight: height,
      btnPaddingX: paddingX,
      btnFontSize: fontSize,
      btnRadius: round ? 45 : radius,
      ...cssVars,
    },
    style
  )

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

  function handleMouseEnter(e: React.MouseEvent<HTMLButtonElement>) {
    onMouseEnter?.(e)
    if (isDisabled) {
      e.preventDefault()
      return
    }
    if (hoverType) {
      setIsHover(true)
    }
  }

  function handleMouseLeave(e: React.MouseEvent<HTMLButtonElement>) {
    onMouseLeave?.(e)
    if (isDisabled) {
      e.preventDefault()
      return
    }
    if (hoverType) {
      setIsHover(false)
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      type={htmlType}
      {...wrapProps}
    >
      {children}
      <Transition show={isLoading} animationConfig="throughRightFade">
        <div className="btn-loader-wrap">
          <Progress className="btn-loader" height={3} striped progress={100} cssVars={{ progressSpeed: '0.35s' }} />
        </div>
      </Transition>
    </button>
  )
}
