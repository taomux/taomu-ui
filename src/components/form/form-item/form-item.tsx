import React from 'react'
import { RegisterOptions, type FieldError } from 'react-hook-form'

import { useTaomuClassName, useInlineStyle } from '../../../hooks'

import { formItemStyled, FormItemCssVars } from './form-item.styled'
import { FormContext } from '../form.ctx'

export type FormItemProps = Omit<BaseComponentType<FormItemCssVars>, 'children' | 'onClick'> &
  RegisterOptions & {
    name?: string
    label?: string
    children?: React.ReactElement
    marginBottom?: string
  }

export const FormItem: React.FC<FormItemProps> = ({
  children,
  id,
  className,
  cssVars,
  style,
  name,
  label,
  marginBottom,
  ...registerOptions
}) => {
  const { formInstance } = React.useContext(FormContext)

  if (!formInstance) {
    throw new Error('formInstance is not exist')
  }

  const formItemClassNames = useTaomuClassName('form-item', className)
  const formItemStyle = useInlineStyle<FormItemCssVars>({ formMarginBottom: marginBottom, ...cssVars }, style)

  const errorStatus = React.useMemo(() => {
    return formInstance.formState.errors[name!] as FieldError | void
  }, [formInstance.formState.errors[name!]])

  const addChildrenProps = React.useMemo(() => {
    const addProps: any = {}

    if (name) {
      Object.assign(addProps, formInstance.register(name, { ...registerOptions }))
    } else {
      console.warn('FormItem: name is not exist.')
    }

    if (errorStatus) {
      addProps.status = 'error'
    }

    return addProps
  }, [name, errorStatus])

  if (!children) {
    return null
  }

  return (
    <div id={id} className={formItemClassNames} style={formItemStyle} css={formItemStyled}>
      <div className="form-item-label">{label}</div>
      <div className="form-item-content">
        {React.cloneElement(children, addChildrenProps)}
        {errorStatus ? <div className="form-item-msg color-error fs-12">{errorStatus?.message}</div> : null}
      </div>
    </div>
  )
}
