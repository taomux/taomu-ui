import React from 'react'

import { useTaomuClassName, useInlineStyle } from '../../hooks'
import { radioStyled, RadioCssVars } from './radio.styled'

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
  value?: boolean
  onChange?: (value: boolean, e: React.ChangeEvent) => void
}

export const Radio: React.FC<RadioProps> = ({
  children,
  className,
  cssVars,
  style,
  label,
  size,
  color,
  disabled,
  showOutline = true,
  value,
  onChange,
  ...wrapProps
}) => {
  const radioClassName = useTaomuClassName('radio', { disabled, 'show-outline': showOutline }, className)
  const radioStyle = useInlineStyle<RadioCssVars>(cssVars, style)

  return (
    <label className={radioClassName} style={radioStyle} css={radioStyled} {...wrapProps}>
      <input
        className="radio-box"
        type="radio"
        disabled={disabled}
        checked={value}
        onChange={(e) => onChange?.(e.target.checked, e)}
      />
      {children || label}
    </label>
  )
}
