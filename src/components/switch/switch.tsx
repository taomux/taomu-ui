import React from 'react'
import { isPromise } from 'taomu-toolkit'

import { useTaomuClassName, useInlineStyle } from '../../hooks'
import { Loading } from '../loading'

import { switchStyled, SwitchCssVars } from './switch.styled'

export interface SwitchProps extends Omit<BaseComponentType<SwitchCssVars>, 'children'> {
  color?: string
  width?: number
  height?: number
  radius?: number | string
  /** 是否禁用 */
  disabled?: boolean
  /** 显示外轮廓 */
  showOutline?: boolean
  loading?: boolean
  /** 如果 onChange 返回一个 Promise, 则自动添加 loading */
  autoLoading?: boolean
  /** loading 结束后自动聚焦 */
  autoFocus?: boolean
  value?: boolean
  onChange?: (value: boolean, e: React.FormEvent<HTMLDivElement>) => any
}

export const Switch: React.FC<SwitchProps> = ({
  className,
  cssVars,
  style,
  width = 34,
  height = 18,
  radius,
  color,
  disabled,
  loading,
  showOutline = true,
  autoLoading = true,
  autoFocus = true,
  value,
  onChange,
  ...wrapProps
}) => {
  const switchThumbRef = React.useRef<HTMLDivElement>(null)
  const [insideLoading, setInsideLoading] = React.useState(false)
  const isLoading = loading || insideLoading
  let isDisabled = disabled || isLoading

  const switchClassName = useTaomuClassName(
    'switch',
    { disabled: isDisabled, active: value, 'show-outline': showOutline, 'is-loading': isLoading },
    className
  )
  const switchStyle = useInlineStyle<SwitchCssVars>(
    { switchColor: color, switchWidth: width, switchHeight: height, switchRadius: radius, ...cssVars },
    style
  )

  function handleOnchange(e: React.FormEvent<HTMLDivElement>) {
    if (isDisabled) {
      e.preventDefault()
      return
    }

    const p = onChange?.(!value, e)

    if (autoLoading && isPromise(p)) {
      setInsideLoading(true)
      p.finally(() => {
        setInsideLoading(false)
        if (autoFocus) {
          setTimeout(() => {
            switchThumbRef.current?.focus()
          }, 0)
        }
      })
    }
  }

  return (
    <div className={switchClassName} style={switchStyle} css={switchStyled} {...wrapProps} tabIndex={0} onClick={handleOnchange}>
      <div ref={switchThumbRef} className="switch-thumb flex center">
        {isLoading ? renderLoading(width, height) : null}
      </div>
    </div>
  )
}

function renderLoading(width: number, height: number) {
  let size = Math.min(width * 0.45, height) - 12
  let weight = 2

  if (size < 6) {
    size = 6
  } else if (size > 32) {
    size = 32
  }

  if (size > 15) {
    weight = 3
  } else if (size > 30) {
    weight = 4
  }

  return <Loading size={size} weight={weight} cssVars={{ loadingTrackColor: 'transparent' }} />
}
