import React from 'react'
import { Global } from '@emotion/react'

import 'atomic-cls'

import { useThemeMedia } from '../../hooks'
import { getGlobalStyled } from '../../styles'
import { PopupService } from '../popup/popup.service'

export interface TaomuAppProps {
  children: React.ReactNode
}

/**
 * 初始化 TaomuApp
 *
 * 包裹根节点
 *
 * 请确保全局只有一个 TaomuApp
 */
export const TaomuApp: React.FC<TaomuAppProps> = ({ children }) => {
  const { theme } = useThemeMedia()

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return (
    <>
      <Global styles={getGlobalStyled()} />
      <PopupService />
      {children}
    </>
  )
}
