import { css } from '@emotion/react'

import { initGlobalCssVars, linkCssVar } from '../../styles'

export interface TitlebarCssVars {
  titlebarColor?: string
}

initGlobalCssVars('common', {
  titlebarColor: linkCssVar('colorPrimary'),
})

export const titlebarStyled = css`
  stroke: ${linkCssVar('titlebarColor')};
`

declare global {
  interface GlobalCssVars extends TitlebarCssVars {}
}
