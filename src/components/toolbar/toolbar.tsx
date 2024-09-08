import React from 'react'

import { useTaomuClassName, useInlineStyle } from '../../hooks'

import { ToolbarContext } from './toolbar.ctx'
import { ToolbarItem, type ToolbarItemProps } from './toolbar-item'
import { toolbarStyled, ToolbarCssVars } from './toolbar.styled'

export interface ToolbarProps extends BaseComponentType<ToolbarCssVars> {
  /** 排列方式 */
  direction?: 'horizontal' | 'vertical'
  /** 工具栏元素 */
  items?: ToolbarItemProps[]
  /** 反转工具栏元素 */
  reverseItems?: ToolbarItemProps[]
  /** 交互模式 */
  mode?: 'radio' | 'checkbox' | 'none'
  /** 默认选中项 */
  defaultIndex?: number
}

/** 工具栏 */
export const Toolbar: React.FC<ToolbarProps> = ({
  className,
  cssVars,
  style,
  children,
  items,
  reverseItems,
  defaultIndex,
  direction = 'horizontal',
  mode = 'radio',
  ...wrapProps
}) => {
  const toolbarClassNames = useTaomuClassName('toolbar flex', direction === 'horizontal' ? 'row' : 'column', className)
  const toolbarStyle = useInlineStyle<ToolbarCssVars>(cssVars, style)

  const [prevIndex, setPrevIndex] = React.useState<number>()
  const [currentIndex, setCurrentIndex] = React.useState(defaultIndex)

  React.useEffect(() => {
    return () => {
      setPrevIndex(currentIndex)
    }
  }, [currentIndex])

  function handleItemClick(item: ToolbarItemProps, index: number) {
    console.log('handleItemClick', item, index)

    switch (mode) {
      case 'radio':
        setCurrentIndex(index)
        break
      case 'checkbox':
        // TODO
        break
      default:
        break
    }
  }

  function renderItems(inputItems?: ToolbarItemProps[]): React.ReactNode {
    if (!inputItems?.length) return null
    return inputItems.map(({ onClick, ...itemProps }, index) => {
      return (
        <ToolbarItem
          key={index}
          {...itemProps}
          onClick={(e) => {
            handleItemClick(itemProps, index)
            return onClick?.(e)
          }}
        />
      )
    })
  }

  return (
    <ToolbarContext.Provider value={{ prevIndex, currentIndex }}>
      <div className={toolbarClassNames} style={toolbarStyle} css={toolbarStyled} {...wrapProps}>
        {renderItems(items)}
        {reverseItems?.length && (
          <>
            <div className="flex-1"></div>
            {renderItems(reverseItems)}
          </>
        )}
        {children}
      </div>
    </ToolbarContext.Provider>
  )
}
