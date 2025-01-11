import React from 'react'
import { uuid } from 'taomu-toolkit'
import { Global, SerializedStyles } from '@emotion/react'

import 'atomic-cls'

import { useThemeMedia, useCustomEvent } from '../../hooks'
import { getGlobalCssVars, getGlobalStyled } from '../../styles'
import { PopupService } from '../popup/popup.service'

export interface TaomuAppProps {
  children: React.ReactNode
}

let globalInit = ''

/**
 * 初始化 TaomuApp
 *
 * 包裹根节点
 *
 * 请确保全局只有一个 TaomuApp
 */
export const TaomuApp: React.FC<TaomuAppProps> = ({ children }) => {
  const appId = React.useRef(uuid())
  const { theme } = useThemeMedia()

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
