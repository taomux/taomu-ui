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
  defaultIndexes?: number | number[]
  /** 默认选中项 key */
  defaultKeys?: MenuItemKey | MenuItemKey[]
  /** 受控选中项索引 */
  activeIndexes?: number | number[]
  /** 受控选中项 key */
  activeKeys?: MenuItemKey | MenuItemKey[]
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
  /** 空状态 */
  empty?: React.ReactNode
  /** 背景色 */
  background?: React.CSSProperties['background']
  /** 附加到 MenuItem 组件的 props */
  itemProps?: MenuItemProps
  /** 禁止文本选中 */
  disableUserSelect?: boolean
  /** 选中项变更 */
  onChange?: (keys: MenuItemKey | MenuItemKey[], indexes: number | number[]) => void
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
  defaultIndexes,
  defaultKeys,
  activeIndexes,
  activeKeys,
  mode = 'none',
  direction = 'vertical',
  empty = true,
  overflowBreak,
  styleMode,
  onChange,
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
  const [insideIndex, setInsideIndex] = React.useState(getActiveIndex(items, defaultIndexes, defaultKeys))

  const currentIndex = React.useMemo(() => {
    if (activeIndexes !== undefined || activeKeys !== undefined) {
      return getActiveIndex(items, activeIndexes, activeKeys)
    }

    return insideIndex
  }, [activeIndexes, activeKeys, insideIndex, defaultIndexes, defaultKeys, items])

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

  function handleSelectChange(indexes: number[]) {
    const keys = indexes.map((i) => items![i]?.name || i)
    setInsideIndex(indexes)
    onChange?.(keys, indexes)
  }

  function handleItemClick(index: number) {
    switch (mode) {
      case 'radio':
        if (currentIndex[0] === index) break
        setInsideIndex([index])
        handleSelectChange([index])
        break
      case 'checkbox':
        setInsideIndex((prev) => {
          const indexes = prev?.includes(index) ? prev?.filter((i) => i !== index) : [...(prev || []), index]
          handleSelectChange(indexes)
          return indexes
        })
        break
      default:
        break
    }
  }

  function renderItems() {
    if (!items?.length) {
      if (empty === true) {
        return <Empty />
      } else if (empty) {
        return empty
      } else {
        return null
      }
    }

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
        {children}
      </div>
    </MenuContext.Provider>
  )
}

function getActiveIndex(items: MenuProps['items'], index: MenuProps['defaultIndexes'], keys: MenuProps['defaultKeys']) {
  if (typeof index === 'number') {
    return [index]
  } else if (Array.isArray(index)) {
    return index
  }

  if (!items?.length) return []

  if (Array.isArray(keys)) {
    return keys.map((key) => items.findIndex((item) => item.name === key))
  } else if (!!keys) {
    return [items.findIndex((item) => item.name === keys)]
  }

  return []
}
