import { css } from '@emotion/react'

import { setGlobalCssVars, linkCssVar } from '../../../styles'

export interface ToolbarItemCssVars {
  toolbarItemColor?: string
}

setGlobalCssVars('common', {
  toolbarItemColor: linkCssVar('colorPrimary'),
})

export const toolbarItemStyled = css`
  stroke: ${linkCssVar('toolbarItemColor')};
`

declare global {
  interface GlobalCssVars extends ToolbarItemCssVars {}
}
