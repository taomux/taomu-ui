import React from 'react'

import { useTaomuClassName } from '../../../hooks'
import type { FormItemInputRef } from '../../form/form-item'
import { Radio, RadioProps } from '../radio'

export interface RadioGroupProps extends Omit<BaseComponentType, 'cssVars'> {
  options?: RadioGroupItemType[]
  name?: string
  value?: StringAndNumber
  onChange?: (ref: RadioGroupRef, value?: StringAndNumber) => void
}

export interface RadioGroupItemType extends Omit<RadioProps, 'value'> {
  key?: StringAndNumber
  value: StringAndNumber
}

export interface RadioGroupRef extends FormItemInputRef<StringAndNumber> {}

export const RadioGroup = React.forwardRef<RadioGroupRef, RadioGroupProps>(
  ({ className, name, options, value, onChange, ...wrapProps }, ref) => {
    const radioRef = React.useRef<RadioGroupRef>({ target: { value, name }, focus: () => {} })

    const radioGroupClassNames = useTaomuClassName('radio-group', className)

    React.useImperativeHandle(ref, () => {
      return radioRef.current
    })

    React.useEffect(() => {
      radioRef.current.target.value = value
    }, [value])

    function emitOnChange(e: React.ChangeEvent<HTMLInputElement>) {
      if (e.target.checked === true) {
        radioRef.current.target.value = e.target.name
        onChange?.(radioRef.current, e.target.name)
      }
    }

    return (
      <div className={radioGroupClassNames} {...wrapProps}>
        {options?.map(({ key, value: itemValue, name, ...itemProps }, index) => {
          return (
            <Radio
              key={key || itemValue || index}
              name={name || itemValue?.toString()}
              {...itemProps}
              value={value == itemValue}
              onChange={emitOnChange}
            />
          )
        })}
      </div>
    )
  }
)
