import { css } from '@emotion/react'

import { setGlobalCssVars, linkCssVar } from '../../../styles'

export interface FormItemCssVars {
  formMarginBottom?: number | string
}

// setGlobalCssVars('common', {
//   formMarginBottom: 16,
// })

export const formItemStyled = css`
  position: relative;
  .form-item-msg {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    background-color: ${linkCssVar('colorError')};
    color: #fff;
    padding: 2px 8px;
    border-radius: 4px 4px 0 0;

    /* transition: ${linkCssVar()}; */
  }

  &:hover {
    .form-item-msg {
      opacity: 0.2;
    }
  }
`

declare global {
  interface GlobalCssVars extends FormItemCssVars {}
}
