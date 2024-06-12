import { css } from '@emotion/react'

import { setGlobalCssVars, linkCssVar } from '../../styles'

export interface SwitchCssVars {
  switchColor?: string
}

setGlobalCssVars('common', {
  switchColor: linkCssVar('colorPrimary'),
})

export const switchStyled = css`
  stroke: ${linkCssVar('switchColor')};
`

declare global {
  interface GlobalCssVars extends SwitchCssVars {}
}
