import { css } from '@emotion/react'

import { setGlobalCssVars, linkCssVar } from '../../styles'

export interface LoadingCssVars {
  loadingColor?: string
}

setGlobalCssVars('common', {
  loadingColor: linkCssVar('colorPrimary'),
})

export const loadingStyled = css`
  stroke: ${linkCssVar('loadingColor')};
`

declare global {
  interface GlobalCssVars extends LoadingCssVars {}
}
