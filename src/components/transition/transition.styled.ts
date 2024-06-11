import { css } from '@emotion/react'

import { setGlobalCssVars, linkCssVar } from '../../styles'

export interface TransitionCssVars {
  transitionColor?: string
}

setGlobalCssVars('common', {
  transitionColor: linkCssVar('colorPrimary'),
})

export const transitionStyled = css`
  stroke: ${linkCssVar('transitionColor')};
`

declare global {
  interface GlobalCssVars extends TransitionCssVars {}
}
