import React from 'react'
import { RegisterOptions } from 'react-hook-form'

import { Transition } from '../../transition'
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

  const formItemClassNames = useTaomuClassName('form-item', className)
  const formItemStyle = useInlineStyle<FormItemCssVars>(cssVars, style)

  // const value = formInstance.watch(name!)

  // const errorStatus = React.useMemo(() => {
  //   return formInstance.getFieldState(name!)
  // }, [value, name])

  const addChildrenProps = React.useMemo(() => {
    const addProps: any = {}

    if (name) {
      Object.assign(addProps, formInstance.register(name, { ...registerOptions }))
    } else {
      console.warn('FormItem: name is not exist.')
    }

    // console.log(registerOptions)

    return addProps
  }, [name])

  console.log(formInstance.formState.errors)

  const fieldState = name ? formInstance.getFieldState(name) : undefined

  if (!children) {
    return null
  }

  return (
    <div id={id} className={formItemClassNames} style={formItemStyle} css={formItemStyled}>
      <div className="form-item-label">{label}</div>
      <div className="form-item-content">
        {React.cloneElement(children, addChildrenProps)}
        <Transition animationConfig="moveTop" show={!!fieldState?.error}>
          <div>{fieldState?.error?.message}</div>
        </Transition>
      </div>
    </div>
  )
}
