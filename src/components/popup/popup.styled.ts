import { css } from '@emotion/react'

import { setGlobalCssVars, linkCssVar } from '../../styles'

export interface PopupCssVars {
  zIndex?: string
  overlayBackground?: string
}

setGlobalCssVars('common', {
  zIndex: '1000',
  overlayBackground: 'rgba(0, 0, 0, 0.4)',
})

export const popupStyled = css`
  &:not(.no-fixed) {
    position: fixed;
    left: 0;
    top: 0;
    z-index: ${linkCssVar('zIndex')};
  }

  .popup-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    background-color: ${linkCssVar('overlayBackground')};
    &.background-event {
      pointer-events: none;
    }
  }
`

declare global {
  interface GlobalCssVars extends PopupCssVars {}
}
