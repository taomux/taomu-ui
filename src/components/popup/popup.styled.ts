import { css } from '@emotion/react'

import { setGlobalCssVars, linkCssVar } from '../../styles'

export interface PopupCssVars {
  popupColor?: string
}

setGlobalCssVars('common', {
  popupColor: linkCssVar('colorPrimary'),
})

export const popupStyled = css`
  stroke: ${linkCssVar('popupColor')};
`

declare global {
  interface GlobalCssVars extends PopupCssVars {}
}
