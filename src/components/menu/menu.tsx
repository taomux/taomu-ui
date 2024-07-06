import React from 'react'

import { useTaomuClassName, useInlineStyle } from '../../hooks'
import { menuStyled, MenuCssVars } from './menu.styled'

import { MenuItem, type MenuItemProps } from './menu-item'

export interface MenuProps extends BaseComponentType<MenuCssVars> {
  /** 菜单配置 */
  items?: MenuItemProps[]
  /** 宽度 默认 auto */
  width?: React.CSSProperties['width']
  /** 高度 默认 auto */
  height?: React.CSSProperties['height']
  /** group 边距 */
  padding?: React.CSSProperties['padding']
  /** item 间距 */
  gap?: number
  /** 背景色 */
  background?: React.CSSProperties['background']
  /** 背景模糊 */
  backgroundBlur?: boolean
  /** 附加到 MenuItem 组件的 props */
  itemProps?: MenuItemProps
  /** 禁止文本选中 */
  disableUserSelect?: boolean
  /** 处理菜单组点击事件 */
  handleItemClick?: (item: MenuItemProps, index: number, event: React.MouseEvent<HTMLDivElement>) => void
}

export const Menu: React.FC<MenuProps> = ({
  children,
  className,
  cssVars,
  style,
  items,
  width,
  height,
  padding = 4,
  gap = 4,
  background,
  backgroundBlur,
  itemProps,
  disableUserSelect = true,
  handleItemClick,
  ...wrapProps
}) => {
  const menuClassNames = useTaomuClassName(
    `menu-group flex col gap-${gap} p-4 shadow-md border rect-1 br-4 mini-scrollbar`,
    { 'background-blur': backgroundBlur, 'disable-user-select': disableUserSelect },
    className
  )
  const menuStyle = useInlineStyle<MenuCssVars>(
    { menuWidth: width, menuHeight: height, menuBackground: background, menuPadding: padding, ...cssVars },
    style
  )

  return (
    <div className={menuClassNames} style={menuStyle} css={menuStyled} {...wrapProps}>
      {children ||
        items?.map(({ onClick, ...restItemProps }, index) => (
          <MenuItem
            key={restItemProps.key || index}
            {...itemProps}
            {...restItemProps}
            onClick={(item, e) => {
              onClick?.(item, e)
              handleItemClick?.(item, index, e)
            }}
          />
        ))}
    </div>
  )
}
