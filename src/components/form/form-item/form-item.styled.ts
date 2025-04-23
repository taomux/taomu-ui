import { css } from '@emotion/react'

import { linkCssVar } from '../../../styles'

export interface FormItemCssVars {
  formMarginBottom?: number | string
  formLabelWidth?: number | string

  formItemGap?: number | string
}

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
      transform: translateY(1.5px);
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

  .fi-label-text {
    position: relative;
    .required-flag {
      position: absolute;
      top: -3px;
      left: -8px;
    }
  }

  .form-item-msg {
    position: absolute;
    display: flex;
    align-items: flex-end;
    position: absolute;
    left: 0;
    bottom: -18px;
  }
`

declare global {
  interface GlobalCssVars extends FormItemCssVars {}
}
