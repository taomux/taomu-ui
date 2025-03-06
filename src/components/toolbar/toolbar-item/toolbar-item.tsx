import React from 'react'

import { useTaomuClassName, useInlineStyle } from '../../../hooks'

import { toolbarItemStyled, ToolbarItemCssVars } from './toolbar-item.styled'

export interface ToolbarItemProps extends BaseComponentType<ToolbarItemCssVars> {
  id?: string
  label?: React.ReactNode
  tooltip?: React.ReactNode
}

export const ToolbarItem: React.FC<ToolbarItemProps> = ({ className, cssVars, style, children, label, ...wrapProps }) => {
  const toolbarItemClassNames = useTaomuClassName('toolbar-item', className)
  const toolbarItemStyle = useInlineStyle<ToolbarItemCssVars>(cssVars, style)

  return (
    <div className={toolbarItemClassNames} style={toolbarItemStyle} css={toolbarItemStyled} {...wrapProps}>
      <p>component toolbar-item is created</p>
    </div>
  )
}
