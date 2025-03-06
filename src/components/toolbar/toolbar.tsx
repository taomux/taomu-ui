import React from 'react'

import { useTaomuClassName, useInlineStyle } from '../../hooks'
import { ToolbarItem, ToolbarItemProps } from './toolbar-item'

import { toolbarStyled, ToolbarCssVars } from './toolbar.styled'

export interface ToolbarProps extends BaseComponentType<ToolbarCssVars> {
  items?: ToolbarItemProps[]
  /** 高度 */
  fixed?: boolean
  /** 固定位置 */
  fixPosition?: 'top' | 'bottom' | 'left' | 'right'
}

export const Toolbar: React.FC<ToolbarProps> = ({ className, cssVars, style, fixed, fixPosition, items, ...wrapProps }) => {
  const toolbarClassNames = useTaomuClassName('toolbar', className)
  const toolbarStyle = useInlineStyle<ToolbarCssVars>(cssVars, style)

  function renderItems() {
    if (!items?.length) return null

    return items.map(({ id, ...itemProps }, index) => {
      const key = id || index
      return <ToolbarItem key={key} id={id} {...itemProps} />
    })
  }

  return (
    <div className={toolbarClassNames} style={toolbarStyle} css={toolbarStyled} {...wrapProps}>
      {renderItems()}
    </div>
  )
}
