import React from 'react'

import { useTaomuClassName, useInlineStyle } from '../../hooks'
import { menuStyled, MenuCssVars } from './menu.styled'
import { Empty } from '../empty'

import { MenuContext } from './menu.ctx'
import { MenuItem, type MenuItemProps, type MenuItemKey } from './menu-item'

export interface MenuProps extends BaseComponentType<MenuCssVars> {
  /** 排列方式 */
  direction?: 'horizontal' | 'vertical'
  /** 交互模式 */
  mode?: 'radio' | 'checkbox' | 'none'
  /** 菜单风格 */
  styleMode?: 'default' | 'windows'
  /** 默认选中项索引 */
  defaultIndex?: number | number[]
  /** 默认选中项 key */
  defaultKeys?: MenuItemKey | MenuItemKey[]
  /** 菜单配置 */
  items?: MenuItemProps[]
  /** 宽度 默认 auto */
  width?: React.CSSProperties['width']
  /** 高度 默认 auto */
  height?: React.CSSProperties['height']
  /** group 边距 */
  padding?: React.CSSProperties['padding']
  /** group 圆角 */
  radius?: React.CSSProperties['borderRadius']
  /** item 间距 */
  gap?: number
  /** 超出换行 */
  overflowBreak?: boolean
  /** 显示外边框 */
  bordered?: boolean
  /** 显示阴影 */
  shadow?: BaseSizeLevel
  /** 背景色 */
  background?: React.CSSProperties['background']
  /** 附加到 MenuItem 组件的 props */
  itemProps?: MenuItemProps
  /** 禁止文本选中 */
  disableUserSelect?: boolean
  /** 处理菜单组点击事件 */
  onMenuItemClick?: (item: MenuItemProps, index: number, event: React.MouseEvent<HTMLDivElement>) => void
  /** 渲染 items 前调用 */
  beforeItemRender?: (node: React.JSX.Element, props: MenuItemProps) => React.ReactNode
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
  radius,
  bordered = true,
  shadow = 'md',
  background,
  itemProps,
  disableUserSelect = true,
  defaultIndex,
  defaultKeys,
  mode = 'none',
  direction = 'vertical',
  overflowBreak,
  styleMode,
  onMenuItemClick,
  beforeItemRender,
  ...wrapProps
}) => {
  const menuClassNames = useTaomuClassName(
    'menu-group',
    `flex flex-inline p-4 bs-box`,
    direction === 'vertical' ? 'col' : 'row',
    `shadow-${shadow}`,
    { 'disable-user-select': disableUserSelect, 'border rect-1': bordered, 'flex-wrap': overflowBreak },
    className
  )
  const menuStyle = useInlineStyle<MenuCssVars>(
    {
      menuWidth: width,
      menuHeight: height,
      menuBackground: background,
      menuPadding: padding,
      menuRadius: radius,
      menuGap: gap,
      ...cssVars,
    },
    style
  )

  const [prevIndex, setPrevIndex] = React.useState<number>()
  const [currentIndex, setCurrentIndex] = React.useState(getDefaultIndex(items, defaultIndex, defaultKeys))

  React.useEffect(() => {
    return () => {
      if (mode === 'radio' && currentIndex.length === 1) {
        setPrevIndex(currentIndex[0])
      }
    }
  }, [currentIndex, mode])

  React.useEffect(() => {
    if (mode !== 'radio') {
      setPrevIndex(undefined)
    }
  }, [mode])

  function handleItemClick(index: number) {
    switch (mode) {
      case 'radio':
        if (currentIndex[0] === index) break
        setCurrentIndex([index])
        break
      case 'checkbox':
        setCurrentIndex((prev) => {
          if (prev?.includes(index)) {
            return prev?.filter((i) => i !== index)
          } else {
            return [...(prev || []), index]
          }
        })
        break
      default:
        break
    }
  }

  function renderItems() {
    if (children) {
      return children
    }

    if (!items?.length) return <Empty />

    return items.map(({ onClick, name, active, styleMode: itemStyleMode, ...restItemProps }, index) => {
      const nextItemProps: MenuItemProps = {
        name,
        active: active || currentIndex.includes(index),
        styleMode: itemStyleMode || styleMode,
        onClick: (item, e) => {
          handleItemClick(index)
          onClick?.(item, e)
          onMenuItemClick?.(item, index, e)
        },
        ...itemProps,
        ...restItemProps,
      }

      const itemNode = <MenuItem key={name || index} {...nextItemProps} />

      if (beforeItemRender) return beforeItemRender(itemNode, nextItemProps)

      return itemNode
    })
  }

  return (
    <MenuContext.Provider value={{ prevIndex, currentIndex, direction }}>
      <div className={menuClassNames} style={menuStyle} css={menuStyled} {...wrapProps}>
        {renderItems()}
      </div>
    </MenuContext.Provider>
  )
}

function getDefaultIndex(
  items: MenuProps['items'],
  defaultIndex: MenuProps['defaultIndex'],
  defaultKeys: MenuProps['defaultKeys']
) {
  if (typeof defaultIndex === 'number') {
    return [defaultIndex]
  } else if (Array.isArray(defaultIndex)) {
    return defaultIndex
  }

  if (!items?.length) return []

  if (Array.isArray(defaultKeys)) {
    return defaultKeys.map((key) => items.findIndex((item) => item.name === key))
  } else if (!!defaultKeys) {
    return [items.findIndex((item) => item.name === defaultKeys)]
  }

  return []
}
