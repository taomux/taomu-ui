import { css } from '@emotion/react'

import { setGlobalCssVars, linkCssVar, mixinRgba } from '../../styles'

export interface MenuCssVars {
  menuWidth?: React.CSSProperties['width']
  menuHeight?: React.CSSProperties['height']
  menuBackground?: React.CSSProperties['background']
  menuPadding?: React.CSSProperties['padding']
}

setGlobalCssVars('common', {
  menuWidth: 'auto',
  menuHeight: 'auto',
  menuBackground: mixinRgba('colorBackgroundRgb', 0.9),
  menuPadding: 4,
})

export const menuStyled = css`
  height: ${linkCssVar('menuHeight')};
  width: ${linkCssVar('menuWidth')};
  overflow-y: auto;
  background: ${linkCssVar('menuBackground')};
  padding: ${linkCssVar('menuPadding')};

  &.background-blur {
    backdrop-filter: blur(5px);
  }

  &.disable-user-select {
    user-select: none;
  }
`

declare global {
  interface GlobalCssVars extends MenuCssVars {}
}
