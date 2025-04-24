import React from 'react'
import { uuid } from 'taomu-toolkit'
import { Global, SerializedStyles } from '@emotion/react'

import 'atomic-cls'

import type { ThemeType } from '../../utils/theme'
import { useThemeMedia, useCustomEvent } from '../../hooks'
import { getGlobalCssVars, getGlobalStyled } from '../../styles'
import { PopupService } from '../popup/popup.service'

export interface TaomuAppProps {
  children: React.ReactNode
  /** 服务端渲染模式 */
  serverRender?: boolean
  /** 服务端渲染模式下传入的配置项 */
  serverConfig?: ServerConfig
}

export interface ServerConfig {
  /** 主题变更回调 */
  onThemeChange?: (theme: ThemeType) => void
}

let globalInit = ''

/**
 * 初始化 TaomuApp
 *
 * 包裹根节点
 *
 * 请确保全局只有一个 TaomuApp
 */
export const TaomuApp: React.FC<TaomuAppProps> = ({ children, serverRender, serverConfig }) => {
  const appId = React.useRef(uuid())
  const { theme } = useThemeMedia(serverRender ? serverConfig : undefined)

  const [globalCssVars, setGlobalCssVars] = React.useState<SerializedStyles>(getGlobalCssVars())
  const [globalStyle, setGlobalStyle] = React.useState<SerializedStyles | SerializedStyles[]>(getGlobalStyled())

  useCustomEvent('taomu://update-global-css-vars', () => {
    setGlobalCssVars(getGlobalCssVars())
  })

  useCustomEvent('taomu://update-global-style', () => {
    setGlobalStyle(getGlobalStyled())
  })

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  React.useEffect(() => {
    if (!globalInit) {
      globalInit = appId.current
    } else {
      console.error('TaomuApp only support one instance')
    }

    return () => {
      globalInit = ''
    }
  }, [])

  return (
    <>
      {(!globalInit || globalInit === appId.current) && <PopupService />}
      <Global styles={[globalCssVars, globalStyle]} />
      {children}
    </>
  )
}
