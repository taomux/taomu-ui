import React from 'react'
import clsx from 'clsx'

import { useTaomuClassName } from '../../../hooks'
import { Switch, SwitchProps, SwitchRef } from '../switch'
import { SwitchCssVars } from '../switch.styled'

export interface SwitchTextProps extends BaseComponentType<SwitchCssVars> {
  label?: React.ReactNode
  value?: SwitchProps['value']
  onChange?: SwitchProps['onChange']
  disabled?: SwitchProps['disabled']
  switchProps?: Partial<SwitchProps>
  beforeText?: boolean
}

export const SwitchText: React.FC<SwitchTextProps> = React.forwardRef<SwitchRef | null, SwitchTextProps>(
  ({ label, children, className, cssVars, value, disabled, onChange, switchProps = {}, beforeText, ...wrapProps }, ref) => {
    const switchRef = React.useRef<SwitchRef>(null)
    const switchTextClassNames = useTaomuClassName('switch-text flex gap-8', className)

    React.useImperativeHandle(ref, () => {
      return switchRef.current as SwitchRef
    })

    switchProps.className = clsx('switch-text-switch flex-none', switchProps.className)

    const contents: React.ReactNode[] = [
      <Switch
        key="switch"
        ref={switchRef}
        cssVars={cssVars}
        disabled={disabled}
        value={value}
        onChange={onChange}
        {...switchProps}
      />,
    ]

    const textNode = label || children

    if (beforeText) {
      contents.unshift(textNode)
    } else {
      contents.push(textNode)
    }

    return (
      <div className={switchTextClassNames} {...wrapProps}>
        {contents}
      </div>
    )
  }
)
