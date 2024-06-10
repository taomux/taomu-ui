import React from 'react'
import { isPromise } from 'taomu-toolkit'

import { useInlineStyle, useTaomuClassName } from '../../hooks'
import { buttonStyled, BtnCssVars } from './button.styled'
import { Progress } from '../progress'

export type ButtonType = 'primary' | 'default' | 'warning' | 'danger' | 'link'
export type ButtonHtmlType = 'button' | 'submit' | 'reset'

export interface ButtonProps extends ReactBaseType<BtnCssVars> {
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
  /** 加载状态 */
  loading?: boolean
  /** 如果 onClick 返回一个 promise, 则自动添加按钮 loading */
  autoLoading?: boolean
  /** 显示外轮廓 */
  showOutline?: boolean
}

const LoadingBar: React.FC = () => {
  // TODO: 使用 props 接收状态开控制移出动画
  const domRef = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    if (!domRef.current) return

    const k = new KeyframeEffect(
      domRef.current,
      [
        { transform: 'translate3d(100%, 0, 0)', opacity: 0 },
        { transform: 'translate3d(0, 0, 0)', opacity: 1 },
      ],
      {
        duration: 600,
        easing: 'cubic-bezier(0.175, 0.82, 0.265, 1)',
      }
    )

    const animation = new Animation(k)
    animation.play()

    return () => {
      animation.cancel()
    }
  }, [domRef])

  return (
    <div ref={domRef} className="btn-loader-wrap">
      <Progress className="btn-loader" height={3} striped progress={100} cssVars={{ progressSpeed: '0.35s' }} />
    </div>
  )
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
  onClick,
  ...wrapProps
}) => {
  // const [parent] = useAutoAnimate(buttonAutoAnimate)
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
      })
    }
  }

  function renderLoader() {
    if (!isLoading) return null

    return <LoadingBar />

    return (
      <div className="btn-loader-wrap">
        <Progress className="btn-loader" height={3} striped progress={100} cssVars={{ progressSpeed: '0.35s' }} />
      </div>
    )
  }

  return (
    <button
      // ref={parent}
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
