import { css } from '@emotion/react'

import { setGlobalCssVars, linkCssVar } from '../../styles'

export interface ToastCssVars {
  toastColor?: string
}

setGlobalCssVars('common', {
  toastColor: linkCssVar('colorPrimary'),
})

export const toastStyled = css`
  stroke: ${linkCssVar('toastColor')};
`

declare global {
  interface GlobalCssVars extends ToastCssVars {}
}
