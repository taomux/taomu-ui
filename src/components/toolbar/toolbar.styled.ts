import { css } from '@emotion/react'

import { setGlobalCssVars, linkCssVar } from '../../styles'

export interface ToolbarCssVars {
  toolbarColor?: string
}

setGlobalCssVars('common', {
  toolbarColor: linkCssVar('colorPrimary'),
})

export const toolbarStyled = css`
  stroke: ${linkCssVar('toolbarColor')};
`

declare global {
  interface GlobalCssVars extends ToolbarCssVars {}
}
