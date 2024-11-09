import React from 'react'

import { useTaomuClassName, useInlineStyle } from '../../hooks'
import { checkboxStyled, CheckboxCssVars } from './checkbox.styled'

export interface CheckboxProps extends BaseComponentType<CheckboxCssVars> {
  /** 复选框的标签 */
  label?: React.ReactNode
  /** 复选框尺寸 */
  size?: number | string
  /** 复选框颜色 */
  color?: string
  /** 圆角 */
  radius?: number | string
  /** 禁用状态 */
  disabled?: boolean
  /** 显示外轮廓 */
  showOutline?: boolean
  value?: boolean
  onChange?: (value: boolean, e: React.ChangeEvent) => void
}

export const Checkbox = React.forwardRef<HTMLInputElement | null, CheckboxProps>(
  (
    {
      children,
      className,
      cssVars,
      style,
      label,
      size,
      color,
      radius,
      showOutline = true,
      value,
      disabled,
      onChange,
      ...wrapProps
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null)

    const checkboxClassName = useTaomuClassName(
      'checkbox',
      'checkbox-label',
      { disabled, 'show-outline': showOutline },
      className
    )
    const checkboxStyle = useInlineStyle<CheckboxCssVars>(
      { checkboxSize: size, checkboxColor: color, checkboxRadius: radius, ...cssVars },
      style
    )

    React.useImperativeHandle(ref, () => {
      return inputRef.current as HTMLInputElement
    })

    function emitOnChange(e: React.ChangeEvent<HTMLInputElement>) {
      onChange?.(e.target.checked, e)
    }

    return (
      <label className={checkboxClassName} style={checkboxStyle} css={checkboxStyled} {...wrapProps}>
        <input
          ref={inputRef}
          className="checkbox-box"
          type="checkbox"
          disabled={disabled}
          checked={value}
          onChange={emitOnChange}
        />
        {children || label}
      </label>
    )
  }
)
