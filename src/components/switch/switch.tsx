import React from 'react'

import { useTaomuClassName, useInlineStyle } from '../../hooks'
import { switchStyled, SwitchCssVars } from './switch.styled'

export interface SwitchProps extends ReactBaseType<SwitchCssVars> {}

export const Switch: React.FC<SwitchProps> = ({ className, cssVars, style, ...wrapProps }) => {
  const switchClassName = useTaomuClassName('switch', className)
  const switchStyle = useInlineStyle<SwitchCssVars>(cssVars, style)

  return (
    <div className={switchClassName} style={switchStyle} css={switchStyled} {...wrapProps}>
      <p>component switch is created</p>
    </div>
  )
}
