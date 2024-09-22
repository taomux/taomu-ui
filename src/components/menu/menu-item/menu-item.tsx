import React from 'react'
import clsx from 'clsx'

import { useTaomuClassName, useInlineStyle } from '../../../hooks'
import { Transition } from '../../transition'
import { MenuContext } from '../menu.ctx'
import { getMenuActiveBlockAnimationConfig } from '../menu.utils'
import { menuItemStyled, MenuItemCssVars } from './menu-item.styled'

export type MenuItemKey = string | number

export interface MenuItemProps extends Omit<BaseComponentType<MenuItemCssVars>, 'onClick'> {
  key?: MenuItemKey
  /** 菜单风格 */
  styleMode?: 'default' | 'windows'
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
    styleMode = 'default',
    onClick,
    ...wrapProps
  } = itemProps
  const { prevIndex, currentIndex, direction } = React.useContext(MenuContext)
  const menuItemClassNames = useTaomuClassName(
    'menu-item',
    'flex flex-none row center-v gap-4',
    `style-mode-${styleMode}`,
    { active, disabled },
    className
  )
  const menuItemStyle = useInlineStyle<MenuItemCssVars>(
    { menuItemPaddingX: paddingX, menuItemPaddingY: paddingY, menuItemRadius: radius, ...cssVars },
    style
  )

  // 额外的内部标记，确保激活状态在动画函数变更后生效
  const [isActive, setIsActive] = React.useState(active)

  if (!visible) {
    return null
  }

  if (divider) {
    return <div className="taomu-menu-item-divider border split bottom-1" />
  }

  React.useEffect(() => {
    setTimeout(() => {
      setIsActive(active)
    }, 0)
  }, [active])

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

  function renderActiveBlock() {
    switch (styleMode) {
      case 'windows':
        return (
          <Transition
            show={isActive}
            animationConfig={getMenuActiveBlockAnimationConfig(prevIndex, currentIndex?.[0], direction)}
          >
            <div className={clsx('taomu-menu-item-active-block', { horizontal: direction === 'horizontal' })} />
          </Transition>
        )
      default:
        return null
    }
  }

  return (
    <div className={menuItemClassNames} style={menuItemStyle} css={menuItemStyled} {...wrapProps} onClick={handleClick}>
      {renderActiveBlock()}
      {icon}
      {renderLabel()}
    </div>
  )
}
