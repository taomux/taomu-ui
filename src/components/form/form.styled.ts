import { css } from '@emotion/react'

import { setGlobalCssVars, linkCssVar } from '../../styles'

export interface FormCssVars {
  formColor?: string
}

setGlobalCssVars('common', {
  formColor: linkCssVar('colorPrimary'),
})

export const formStyled = css`
  stroke: ${linkCssVar('formColor')};
`

declare global {
  interface GlobalCssVars extends FormCssVars {}
}
