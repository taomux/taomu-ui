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

  formGap: 4,
  formItemGap: 8,
})

export const formStyled = css`
  display: flex;
  gap: ${linkCssVar('formGap')};

  &.form-layout-inline {
    align-items: center;
    flex-wrap: wrap;
  }

  &.form-layout-horizontal {
    flex-direction: column;
  }
`

declare global {
  interface GlobalCssVars extends FormCssVars {}
}
