import { css } from '@emotion/react'

import { initGlobalCssVars, linkCssVar } from '../../styles'

export interface EmptyCssVars {
  emptyPadding?: string | number
}

initGlobalCssVars('common', {
  emptyPadding: 24,
})

export const emptyStyled = css`
  padding: ${linkCssVar('emptyPadding')};
`

declare global {
  interface GlobalCssVars extends EmptyCssVars {}
}
