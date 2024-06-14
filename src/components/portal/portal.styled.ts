import { css } from '@emotion/react'

import { setGlobalCssVars, linkCssVar } from '../../styles'

export interface PortalCssVars {
  portalColor?: string
}

setGlobalCssVars('common', {
  portalColor: linkCssVar('colorPrimary'),
})

export const portalStyled = css`
  stroke: ${linkCssVar('portalColor')};
`

declare global {
  interface GlobalCssVars extends PortalCssVars {}
}
