import { css } from '@emotion/react'

import { setGlobalCssVars, linkCssVar } from '../../styles'

export interface FormCssVars {}

setGlobalCssVars('common', {
  formMarginBottom: 24,
})

export const formStyled = css``

declare global {
  interface GlobalCssVars extends FormCssVars {}
}
