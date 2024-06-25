import { css } from '@emotion/react'

import { setGlobalCssVars, linkCssVar } from '../../styles'

export interface TitlebarCssVars {
  titlebarColor?: string
}

setGlobalCssVars('common', {
  titlebarColor: linkCssVar('colorPrimary'),
})

export const titlebarStyled = css`
  stroke: ${linkCssVar('titlebarColor')};
`

declare global {
  interface GlobalCssVars extends TitlebarCssVars {}
}
