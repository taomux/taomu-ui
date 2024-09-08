import React from 'react'

import { useTaomuClassName, useInlineStyle } from '../../../hooks'

import { ToolbarContext } from '../toolbar.ctx'
import { toolbarItemStyled, ToolbarItemCssVars } from './toolbar-item.styled'

export interface ToolbarItemProps extends BaseComponentType<ToolbarItemCssVars> {
  icon?: React.ReactNode
  label?: React.ReactNode
  value?: string | number
  active?: boolean
  disabled?: boolean
}

/** 配合 `Toolbar` 使用获得最佳效果 */
export const ToolbarItem: React.FC<ToolbarItemProps> = ({
  className,
  cssVars,
  style,
  children,
  label,
  icon,
  active,
  disabled,
  ...wrapProps
}) => {
  const toolbarItemClassNames = useTaomuClassName('toolbar-item flex row center-v', className)
  const toolbarItemStyle = useInlineStyle<ToolbarItemCssVars>(cssVars, style)
  const { prevIndex, currentIndex } = React.useContext(ToolbarContext)

  console.log({ prevIndex, currentIndex })

  return (
    <div className={toolbarItemClassNames} style={toolbarItemStyle} css={toolbarItemStyled} {...wrapProps}>
      {icon}
      {label || children}
    </div>
  )
}
