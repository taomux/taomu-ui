import React from 'react'

import { useTaomuClassName, useInlineStyle } from '../../hooks'
import { dropdownStyled, DropdownCssVars } from './dropdown.styled'

export interface DropdownProps extends BaseComponentType<DropdownCssVars> {}

export const Dropdown: React.FC<DropdownProps> = ({ className, cssVars, style, ...wrapProps }) => {
  const dropdownClassNames = useTaomuClassName('dropdown', className)
  const dropdownStyle = useInlineStyle<DropdownCssVars>(cssVars, style)

  return (
    <div className={dropdownClassNames} style={dropdownStyle} css={dropdownStyled} {...wrapProps}>
      <p>component dropdown is created</p>
    </div>
  )
}
