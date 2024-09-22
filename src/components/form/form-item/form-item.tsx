import React from 'react'
import { RegisterOptions } from 'react-hook-form'

import { useTaomuClassName, useInlineStyle } from '../../../hooks'

import { formItemStyled, FormItemCssVars } from './form-item.styled'
import { FormContext } from '../form.ctx'

export type FormItemProps = Omit<BaseComponentType<FormItemCssVars>, 'children' | 'onClick'> &
  RegisterOptions & {
    name?: string
    label?: string
    children?: React.ReactElement
  }

export const FormItem: React.FC<FormItemProps> = ({
  children,
  id,
  className,
  cssVars,
  style,
  name,
  label,
  ...registerOptions
}) => {
  const { formInstance } = React.useContext(FormContext)

  if (!formInstance) {
    throw new Error('formInstance is not exist')
  }

  const addChildrenProps = React.useMemo(() => {
    const addProps: any = {}

    if (name) {
      Object.assign(addProps, formInstance.register(name, { ...registerOptions }))
    } else {
      console.warn('FormItem: name is not exist.')
    }

    return addProps
  }, [name])

  console.log(formInstance.getFieldState(name!))

  if (!children) {
    return null
  }

  const formItemClassNames = useTaomuClassName('form-item', className)
  const formItemStyle = useInlineStyle<FormItemCssVars>(cssVars, style)

  return (
    <div id={id} className={formItemClassNames} style={formItemStyle} css={formItemStyled}>
      {React.cloneElement(children, addChildrenProps)}
    </div>
  )
}
