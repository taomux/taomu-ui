import { css } from '@emotion/react'

import { setGlobalCssVars, linkCssVar } from '../../../styles'

export interface FormItemCssVars {
  formMarginBottom?: number | string
  formLabelWidth?: number | string

  formItemGap?: number | string
}

// setGlobalCssVars('common', {
//   formMarginBottom: 16,
// })

export const formItemStyled = css`
  position: relative;
  margin-bottom: ${linkCssVar('formMarginBottom')};

  &.form-item-layout-horizontal {
    display: flex;
    align-items: center;
    gap: ${linkCssVar('formItemGap')};
    .form-item-label {
      flex: none;
      width: ${linkCssVar('formLabelWidth')};
      text-align: right;
    }
    .form-item-content {
      flex: 1;
    }
  }

  &.form-item-layout-inline {
    display: flex;
    align-items: center;
    gap: ${linkCssVar('formItemGap')};
    .form-item-label {
      margin-bottom: 2px;
    }
  }

  &.form-item-layout-vertical {
    display: flex;
    flex-direction: column;
    gap: ${linkCssVar('formItemGap')};
  }

  .form-item-msg {
    position: absolute;
    display: flex;
    align-items: flex-end;
    position: absolute;
  }
`

declare global {
  interface GlobalCssVars extends FormItemCssVars {}
}
