import React from 'react'

import { useTaomuClassName, useInlineStyle, useMergedState } from '../../hooks'
import { inputWrapperStyled, inputStyled, inputOutlineStyled, type InputCssVars } from './input.styled'

import { IconXCircle } from '../icons'

export type InputType = 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url'
export type InputStatus = 'error' | 'warning' | 'success' | 'default'

export interface InputProps<V = string | undefined>
  extends Omit<React.TextareaHTMLAttributes<HTMLInputElement>, 'type' | 'children' | 'onChange' | 'defaultValue' | 'value'> {
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
  /** 默认值 */
  defaultValue?: V
  /** 值 */
  value?: V
  onChange?: (value: V, prevValue: V) => void
}

export interface InputRef {
  input: HTMLInputElement | null
  setFocused: (state: boolean) => void
}

export const Input = React.forwardRef<InputRef, InputProps>(
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
      onFocus,
      onBlur,
      disabled,
      allowClear,
      onChange,
      onInput,
      ...inputProps
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null)

    const [value, setValue] = useMergedState(inputProps.defaultValue || '', {
      value: inputProps.value,
      onChange,
    })

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

    React.useEffect(() => {
      if (focused) {
        inputRef.current?.focus()
      } else {
        inputRef.current?.blur()
      }
    }, [focused])

    React.useImperativeHandle(ref, () => {
      return {
        input: inputRef.current,
        setFocused,
      }
    })

    function renderClearButton() {
      if (!allowClear || !value?.length) return null

      return (
        <IconXCircle
          size={14}
          className="cup icon-x"
          onClick={() => {
            setValue('')
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
            onFocus?.(e)
          }}
          onBlur={(e) => {
            setFocused(false)
            onBlur?.(e)
          }}
          onInput={(e) => {
            setValue(e.currentTarget.value)
            onInput?.(e)
          }}
          {...inputProps}
        />
        {renderClearButton()}
        {rightNode}
      </div>
    )
  }
)
