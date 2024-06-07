import React from 'react'
import { Global } from '@emotion/react'

import { css } from '@emotion/react'

import { getGlobalStyled } from '../../utils'

export interface TaomuProviderProps {
  children: React.ReactNode
}

export const TaomuProvider: React.FC<TaomuProviderProps> = ({ children }) => {
  return (
    <div>
      <Global styles={getGlobalStyled()} />
      {children}
    </div>
  )
}
