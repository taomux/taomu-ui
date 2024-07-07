import React from 'react'

import { useTaomuClassName, useInlineStyle } from '../../hooks'
import { inputOutlineStyled, inputWrapperStyled, textareaStyled, type InputCssVars } from './input.styled'
import type { InputStatus } from './input'

export interface InputTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  cssVars?: InputCssVars
  /** 状态 */
  status?: InputStatus
  /** 外围宽度 */
  width?: React.CSSProperties['width']
  /** 外围高度 */
  height?: React.CSSProperties['height']
  /** 外围 padding */
  padding?: React.CSSProperties['padding']
  /** 圆角 */
  radius?: React.CSSProperties['borderRadius']
  /** 是否允许调整尺寸 */
  resize?: React.CSSProperties['resize']
}

export interface InputTextareaRef {
  textarea: HTMLTextAreaElement | null
}

export const InputTextarea = React.forwardRef<InputTextareaRef, InputTextareaProps>(
  ({ className, style, cssVars, status, width, height, padding = '6px 8px', resize = 'vertical', radius, ...wrapProps }, ref) => {
    const textareaRef = React.useRef<HTMLTextAreaElement>(null)

    const inputWrapClassNames = useTaomuClassName('input-textarea', `status-${status}`, className)
    const inputWrapStyle = useInlineStyle<InputCssVars>(
      {
        inputWidth: width,
        inputHeight: height,
        inputPadding: padding,
        inputRadius: radius,
        textareaResize: resize,
        ...cssVars,
      },
      style
    )

    React.useImperativeHandle(ref, () => ({
      textarea: textareaRef.current,
    }))

    return (
      <textarea
        className={inputWrapClassNames}
        style={inputWrapStyle}
        css={[inputWrapperStyled, inputOutlineStyled, textareaStyled]}
        ref={textareaRef}
        {...wrapProps}
      />
    )
  }
)
