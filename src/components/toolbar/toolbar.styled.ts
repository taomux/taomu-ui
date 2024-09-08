import { css } from '@emotion/react'

import { setGlobalCssVars, linkCssVar } from '../../styles'

export interface ToolbarCssVars {
  toolbarGap?: string | number
}

setGlobalCssVars('common', {
  toolbarGap: 4,
})

export const toolbarStyled = css`
  gap: ${linkCssVar('toolbarGap')};
`

declare global {
  interface GlobalCssVars extends ToolbarCssVars {}
}
