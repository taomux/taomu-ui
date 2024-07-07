import React from 'react'
import clsx from 'clsx'

import { useTaomuClassName, useInlineStyle } from '../../../hooks'
import { menuItemStyled, MenuItemCssVars } from './menu-item.styled'

export interface MenuItemProps extends Omit<BaseComponentType<MenuItemCssVars>, 'onClick'> {
  key?: string | number
  /** 菜单标题 */
  label?: React.ReactNode
  /** 标题基础 Props */
  labelProps?: ReactDivProps
  /** 鼠标悬停时展示的内容 */
  title?: string
  /** 自定义图标 */
  icon?: React.ReactNode
  /** 是否激活状态 */
  active?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 是否可见, 默认为 true */
  visible?: boolean
  /** 是否为分割线 */
  divider?: boolean
  /** 超出一行显示省略号 */
  ellipsis?: boolean
  /** 横向 padding */
  paddingX?: string | number
  /** 纵向 padding */
  paddingY?: string | number
  /** 自定义圆角 */
  radius?: string | number
  /** 点击事件 */
  onClick?: (item: MenuItemProps, event: React.MouseEvent<HTMLDivElement>) => void
}

export const MenuItem: React.FC<MenuItemProps> = (itemProps) => {
  const {
    children,
    className,
    style,
    cssVars,
    label,
    labelProps = {},
    title,
    icon,
    active,
    disabled,
    visible = true,
    divider,
    ellipsis,
    paddingX,
    paddingY,
    radius,
    onClick,
    ...wrapProps
  } = itemProps

  const menuItemClassNames = useTaomuClassName('menu-item', 'flex row center-v gap-4', { active, disabled }, className)
  const menuItemStyle = useInlineStyle<MenuItemCssVars>(
    { menuItemPaddingX: paddingX, menuItemPaddingY: paddingY, menuItemRadius: radius, ...cssVars },
    style
  )

  if (!visible) {
    return null
  }

  if (divider) {
    return <div className="taomu-menu-item-divider border split bottom-1" />
  }

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    if (disabled) {
      return
    }
    onClick?.(itemProps, e)
  }

  function renderLabel() {
    const labelNode = children || label
    if (!labelNode) return null
    labelProps.className = clsx('taomu-menu-item-label flex-1', { 'text-ellipsis': ellipsis }, labelProps.className)
    return (
      <div {...labelProps} title={ellipsis ? title : undefined}>
        {labelNode}
      </div>
    )
  }

  return (
    <div className={menuItemClassNames} style={menuItemStyle} css={menuItemStyled} {...wrapProps} onClick={handleClick}>
      {icon}
      {renderLabel()}
    </div>
  )
}
