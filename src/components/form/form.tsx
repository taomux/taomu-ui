import React from 'react'

import { useTaomuClassName, useInlineStyle } from '../../hooks'

import { formStyled, FormCssVars } from './form.styled'
import type { FormInstance } from './form.hook'
import { FormContext } from './form.ctx'
import { FormItem } from './form-item'

export interface FormProps<FieldValues extends Record<string, any> = Record<string, any>>
  extends Omit<BaseComponentType<FormCssVars>, 'className' | 'onClick'>,
    Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  formInstance: FormInstance<FieldValues>
  onSubmit?: <V extends FieldValues>(values: V) => any
}

export const Form: React.FC<FormProps> & { Item: typeof FormItem } = ({
  children,
  className,
  cssVars,
  style,
  formInstance,
  onSubmit,
  ...wrapProps
}) => {
  const formClassNames = useTaomuClassName('form', className)
  const formStyle = useInlineStyle<FormCssVars>(cssVars, style)

  return (
    <form
      className={formClassNames}
      style={formStyle}
      css={formStyled}
      onSubmit={onSubmit ? formInstance.handleSubmit(onSubmit) : undefined}
      {...wrapProps}
    >
      <FormContext.Provider value={{ formInstance }}>{children}</FormContext.Provider>
    </form>
  )
}

Form.Item = FormItem
