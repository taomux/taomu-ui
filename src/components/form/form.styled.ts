import { css } from '@emotion/react'

import { initGlobalCssVars, linkCssVar } from '../../styles'

export interface FormCssVars {
  formMarginBottom?: number | string
  formLabelWidth?: number | string

  formGap?: number | string
  formItemGap?: number | string
}

initGlobalCssVars('common', {
  formMarginBottom: 18,
  formLabelWidth: 100,

  formGap: 12,
  formItemGap: 8,
})

export const formStyled = css`
  &.form-layout-inline {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: ${linkCssVar('formGap')};
  }
`

declare global {
  interface GlobalCssVars extends FormCssVars {}
}
