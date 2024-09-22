import { css } from '@emotion/react'

import { setGlobalCssVars, linkCssVar } from '../../../styles'

export interface FormItemCssVars {
  formItemColor?: string
}

setGlobalCssVars('common', {
  formItemColor: linkCssVar('colorPrimary'),
})

export const formItemStyled = css`
  stroke: ${linkCssVar('formItemColor')};
`

declare global {
  interface GlobalCssVars extends FormItemCssVars {}
}
