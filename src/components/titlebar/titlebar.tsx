import React from 'react'

import { useTaomuClassName, useInlineStyle } from '../../hooks'
import { titlebarStyled, TitlebarCssVars } from './titlebar.styled'

export interface TitlebarProps extends BaseComponentType<TitlebarCssVars> {}

export const Titlebar: React.FC<TitlebarProps> = ({ className, cssVars, style, ...wrapProps }) => {
  const titlebarClassNames = useTaomuClassName('titlebar', className)
  const titlebarStyle = useInlineStyle<TitlebarCssVars>(cssVars, style)

  return (
    <div className={titlebarClassNames} style={titlebarStyle} css={titlebarStyled} {...wrapProps}>
      <p>component titlebar is created</p>
    </div>
  )
}
