import React from 'react'
import clsx from 'clsx'

import { buttonStyled } from './button.styled'

export interface ButtonProps extends ReactBaseType {}

export const Button: React.FC<ButtonProps> = ({ ...wrapProps }) => {
  wrapProps.className = clsx(buttonStyled, 'taomu-button', wrapProps.className)

  return (
    <div {...wrapProps}>
      <p>component button is created</p>
    </div>
  )
}
