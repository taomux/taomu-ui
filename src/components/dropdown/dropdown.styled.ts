import { css } from '@emotion/react'

import { setGlobalCssVars, linkCssVar } from '../../styles'

export interface DropdownCssVars {
  dropdownColor?: string
}

setGlobalCssVars('common', {
  dropdownColor: linkCssVar('colorPrimary'),
})

export const dropdownStyled = css`
  stroke: ${linkCssVar('dropdownColor')};
`

declare global {
  interface GlobalCssVars extends DropdownCssVars {}
}
