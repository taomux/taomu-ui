import React from 'react'

export interface MenuContextProps {
  /** 上一个选中的索引 */
  prevIndex?: number
  /** 当前选中的索引 */
  currentIndex?: number // 可能不需要
}

export const MenuContext = React.createContext<MenuContextProps>({})
