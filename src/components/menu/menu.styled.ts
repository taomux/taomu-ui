import { css } from '@emotion/react'

import { setGlobalCssVars, linkCssVar, mixinRgba } from '../../styles'

export interface MenuCssVars {
  menuWidth?: React.CSSProperties['width']
  menuHeight?: React.CSSProperties['height']
  menuBackground?: React.CSSProperties['background']
}

setGlobalCssVars('common', {
  menuWidth: 'auto',
  menuHeight: 'auto',
  menuBackground: mixinRgba('colorBackgroundRgb', 0.9),
})

export const menuStyled = css`
  height: ${linkCssVar('menuHeight')};
  width: ${linkCssVar('menuWidth')};
  overflow-y: auto;
  background: ${linkCssVar('menuBackground')};

  &.background-blur {
    backdrop-filter: blur(5px);
  }
`

declare global {
  interface GlobalCssVars extends MenuCssVars {}
}
