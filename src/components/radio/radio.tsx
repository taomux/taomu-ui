import React from 'react'

import { useTaomuClassName, useInlineStyle } from '../../hooks'
import { radioStyled, RadioCssVars } from './radio.styled'
import { RadioGroup } from './radio-group'

export interface RadioProps extends BaseComponentType<RadioCssVars> {
  /** 复选框的标签 */
  label?: React.ReactNode
  /** 复选框尺寸 */
  size?: number | string
  /** 复选框颜色 */
  color?: string
  /** 禁用状态 */
  disabled?: boolean
  /** 显示外轮廓 */
  showOutline?: boolean
  name?: string
  value?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, value: boolean) => void
}

export const Radio = React.forwardRef<HTMLInputElement | null, RadioProps>(
  (
    {
      children,
      className,
      cssVars,
      style,
      label,
      size,
      color,
      disabled,
      showOutline = true,
      name,
      value,
      onChange,
      ...wrapProps
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const radioClassName = useTaomuClassName('radio', { disabled, 'show-outline': showOutline }, className)
    const radioStyle = useInlineStyle<RadioCssVars>(cssVars, style)

    React.useImperativeHandle(ref, () => {
      return inputRef.current as HTMLInputElement
    })

    function emitOnChange(e: React.ChangeEvent<HTMLInputElement>) {
      onChange?.(e, e.target.checked)
    }

    return (
      <label className={radioClassName} style={radioStyle} css={radioStyled} {...wrapProps}>
        <input
          name={name}
          ref={inputRef}
          className="radio-box"
          type="radio"
          disabled={disabled}
          checked={value}
          onChange={emitOnChange}
        />
        {children || label}
      </label>
    )
  }
) as React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement | null>> & {
  Group: typeof RadioGroup
}

Radio.Group = RadioGroup
