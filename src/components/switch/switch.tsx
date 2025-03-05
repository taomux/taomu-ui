import React from 'react'
import clsx from 'clsx'
import { isPromise } from 'taomu-toolkit'

import { useTaomuClassName, useInlineStyle } from '../../hooks'
import { Loading } from '../loading'
import type { FormItemInputRef } from '../form/form-item'
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
  noThumbStyle?: boolean
  thumbContent?: React.ReactNode
  name?: string
  value?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, value: boolean) => any
}

export interface SwitchRef extends FormItemInputRef<SwitchProps['value'], HTMLDivElement> {}

export const Switch = React.forwardRef<SwitchRef | null, SwitchProps>(
  (
    {
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
      noThumbStyle,
      thumbContent,
      name,
      value,
      onChange,
      ...wrapProps
    },
    ref
  ) => {
    const switchThumbRef = React.useRef<SwitchRef>(null)
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

    React.useImperativeHandle(ref, () => {
      return switchThumbRef.current as SwitchRef
    })

    React.useEffect(() => {
      if (switchThumbRef.current?.target) {
        switchThumbRef.current.target.name = name
      }
    }, [name, switchThumbRef.current])

    function emitOnchange(e: React.ChangeEvent<HTMLInputElement>) {
      if (isDisabled) {
        e.preventDefault()
        return
      }

      e.target.checked = !value
      e.target.value = e.target.checked as any
      const p = onChange?.(e, !value)

      if (autoLoading && isPromise(p)) {
        setInsideLoading(true)
        p.finally(() => {
          setInsideLoading(false)
          if (autoFocus) {
            setTimeout(() => {
              switchThumbRef.current?.focus?.()
            }, 0)
          }
        })
      }
    }

    function renderThumbContent() {
      if (isLoading) {
        return renderLoading(width, height)
      }

      if (thumbContent) {
        return thumbContent
      }

      return null
    }

    return (
      <div
        className={switchClassName}
        style={switchStyle}
        css={switchStyled}
        {...wrapProps}
        tabIndex={0}
        onClick={emitOnchange as any}
      >
        <div ref={switchThumbRef as any} className={clsx('switch-thumb flex center', { 'no-thumb-style': noThumbStyle })}>
          {renderThumbContent()}
        </div>
      </div>
    )
  }
)

// as React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<SwitchRef | null>> & {
//   Text: typeof SwitchText
// }

// Switch.Text = SwitchText

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
