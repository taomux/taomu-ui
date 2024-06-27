import React from 'react'

import { useTaomuClassName, useInlineStyle } from '../../hooks'
import { menuStyled, MenuCssVars } from './menu.styled'

export interface MenuProps extends BaseComponentType<MenuCssVars> {}

export const Menu: React.FC<MenuProps> = ({ className, cssVars, style, ...wrapProps }) => {
  const menuClassNames = useTaomuClassName('menu', className)
  const menuStyle = useInlineStyle<MenuCssVars>(cssVars, style)

  return (
    <div className={menuClassNames} style={menuStyle} css={menuStyled} {...wrapProps}>
      <p>component menu is created</p>
    </div>
  )
}
