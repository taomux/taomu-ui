import React from 'react'
import { Global } from '@emotion/react'

import { useThemeMedia } from '../../hooks'
import { getGlobalStyled } from '../../styles'

export interface TaomuProviderProps {
  children: React.ReactNode
}

export const TaomuProvider: React.FC<TaomuProviderProps> = ({ children }) => {
  const { theme } = useThemeMedia()

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return (
    <>
      <Global styles={getGlobalStyled()} />
      {children}
    </>
  )
}
