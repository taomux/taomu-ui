import { css } from '@emotion/react'

import { setGlobalCssVars, linkCssVar } from '../../styles'

export interface MenuCssVars {
  menuColor?: string
}

setGlobalCssVars('common', {
  menuColor: linkCssVar('colorPrimary'),
})

export const menuStyled = css`
  stroke: ${linkCssVar('menuColor')};
`

declare global {
  interface GlobalCssVars extends MenuCssVars {}
}
