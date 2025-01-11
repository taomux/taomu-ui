import React from 'react'

import { useTaomuClassName, useInlineStyle } from '../../hooks'
import { inputWrapperStyled, inputStyled, inputOutlineStyled, type InputCssVars } from './input.styled'

import { IconXCircle } from '../icons'

export type InputType = 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url'
export type InputStatus = 'error' | 'warning' | 'success' | 'default'

export interface InputProps extends Omit<React.TextareaHTMLAttributes<HTMLInputElement>, 'type' | 'children'> {
  cssVars?: InputCssVars
  /** 输入框类型 */
  type?: InputType
  /** 状态 */
  status?: InputStatus
  /** 显示清除按钮 */
  allowClear?: boolean
  /** 外围宽度 */
  width?: React.CSSProperties['width']
  /** 外围高度 */
  height?: React.CSSProperties['height']
  /** 外围 padding */
  padding?: React.CSSProperties['padding']
  /** 圆角 */
  radius?: React.CSSProperties['borderRadius']
  /** 左侧扩展元素 */
  leftNode?: React.ReactNode
  /** 右侧扩展元素 */
  rightNode?: React.ReactNode
  /** 包裹层 props */
  wrapProps?: ReactDivProps
  // /** 默认值 */
  // defaultValue?: V
  // /** 值 */
  // value?: V
  // onChange?: (e: React.ChangeEvent<HTMLInputElement>, value: V) => void
}

export const Input = React.forwardRef<HTMLInputElement | null, InputProps>(
  (
    {
      className,
      cssVars,
      style,
      type = 'text',
      width = '100%',
      height = 32,
      padding = '0 8px',
      radius,
      status = 'default',
      leftNode,
      rightNode,
      wrapProps = {},
      disabled,
      allowClear,
      value,
      onChange,
      onFocus,
      onBlur,
      ...inputProps
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const [isEmpty, setEmpty] = React.useState(true)

    const [focused, setFocused] = React.useState(false)

    const inputWrapClassNames = useTaomuClassName(
      'input',
      'flex row center-v gap-6',
      `status-${status}`,
      {
        disabled,
        focused,
      },
      className
    )
    const inputWrapStyle = useInlineStyle<InputCssVars>(
      { inputWidth: width, inputHeight: height, inputPadding: padding, inputRadius: radius, ...cssVars },
      style
    )

    React.useImperativeHandle(ref, () => {
      return inputRef.current as HTMLInputElement
    })

    React.useEffect(() => {
      if (focused) {
        inputRef.current?.focus()
      } else {
        inputRef.current?.blur()
      }
    }, [focused])

    function renderClearButton() {
      if (!allowClear || isEmpty) return null

      return (
        <IconXCircle
          size={14}
          className="cup icon-x"
          onClick={() => {
            if (!inputRef.current) return
            inputRef.current.value = ''
            onChange?.({ target: inputRef.current } as any)
          }}
        />
      )
    }

    return (
      <div className={inputWrapClassNames} style={inputWrapStyle} css={[inputWrapperStyled, inputOutlineStyled]} {...wrapProps}>
        {leftNode}
        <input
          css={inputStyled}
          ref={inputRef}
          value={value}
          type={type}
          disabled={disabled}
          onFocus={(e) => {
            setFocused(true)
            return onFocus?.(e)
          }}
          onBlur={(e) => {
            setFocused(false)
            return onBlur?.(e)
          }}
          onChange={(e) => {
            if (allowClear) {
              setEmpty(!e.target.value)
            }

            return onChange?.(e)
          }}
          {...inputProps}
        />
        {renderClearButton()}
        {rightNode}
      </div>
    )
  }
)
