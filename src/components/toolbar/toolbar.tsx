import React from 'react'

import { getOppositePosition } from '../../utils'
import { useTaomuClassName, useInlineStyle } from '../../hooks'
import { ToolbarItem, ToolbarItemProps } from './toolbar-item'

import { toolbarStyled, ToolbarCssVars } from './toolbar.styled'

export interface ToolbarProps extends BaseComponentType<ToolbarCssVars> {
  items?: ToolbarItemProps[]
  defaultItemProps?: ToolbarItemProps
  /** 高度 */
  fixed?: boolean
  /** 固定位置 */
  position?: 'top' | 'bottom' | 'left' | 'right'
  /** 宽度，如果横向，则为高度 */
  width?: number | string
  bordered?: boolean
  shadow?: boolean
  padding?: number | string
}

export const Toolbar: React.FC<ToolbarProps> = ({
  className,
  cssVars,
  style,
  fixed,
  position = 'left',
  items,
  width,
  padding,
  bordered,
  shadow,
  defaultItemProps,
  ...wrapProps
}) => {
  const tooltipPositionW = React.useMemo(() => getOppositePosition(position), [position])
  const toolbarClassNames = useTaomuClassName(
    'toolbar',
    'flex gap-4',
    `toolbar-position-${position}`,
    { 'toolbar-fixed': fixed, 'shadow-md': shadow, [`border ${tooltipPositionW}-1`]: bordered },
    className
  )
  const toolbarStyle = useInlineStyle<ToolbarCssVars>({ toolbarWidth: width, toolbarPadding: padding, ...cssVars }, style)

  function renderItems() {
    if (!items?.length) return null

    return items.map(({ id, tooltipPosition, ...itemProps }, index) => {
      const key = id || index
      return (
        <ToolbarItem
          key={key}
          id={id}
          {...defaultItemProps}
          {...itemProps}
          tooltipPosition={tooltipPosition || tooltipPositionW}
        />
      )
    })
  }

  return (
    <div className={toolbarClassNames} style={toolbarStyle} css={toolbarStyled} {...wrapProps}>
      {renderItems()}
    </div>
  )
}
