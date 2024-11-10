import React from 'react'

import { useTaomuClassName } from '../../../hooks'
import { Switch, SwitchProps } from '../switch'
import { SwitchCssVars } from '../switch.styled'

export interface SwitchTextProps extends BaseComponentType<SwitchCssVars> {
  value?: SwitchProps['value']
  onChange?: SwitchProps['onChange']
  switchProps: Partial<SwitchProps>
}

export const SwitchText: React.FC<SwitchTextProps> = ({ className, cssVars, value, onChange, switchProps, ...wrapProps }) => {
  const switchTextClassNames = useTaomuClassName('switch-text', className)

  return (
    <div className={switchTextClassNames} {...wrapProps}>
      <Switch cssVars={cssVars} value={value} onChange={onChange} {...switchProps} />
      <p>component switch-text is created</p>
    </div>
  )
}
