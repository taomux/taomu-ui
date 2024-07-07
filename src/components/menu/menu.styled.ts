import { css } from '@emotion/react'

import { setGlobalCssVars, linkCssVar, mixinRgba } from '../../styles'

export interface MenuCssVars {
  menuWidth?: React.CSSProperties['width']
  menuHeight?: React.CSSProperties['height']
  menuBackground?: React.CSSProperties['background']
  menuPadding?: React.CSSProperties['padding']
  menuRadius?: React.CSSProperties['borderRadius']
}

setGlobalCssVars('common', {
  menuWidth: 'auto',
  menuHeight: 'auto',
  menuBackground: mixinRgba('colorBackgroundRgb', 0.9),
  menuPadding: 4,
  menuRadius: linkCssVar('radiusMD'),
})

export const menuStyled = css`
  overflow-y: auto;

  height: ${linkCssVar('menuHeight')};
  width: ${linkCssVar('menuWidth')};
  background: ${linkCssVar('menuBackground')};
  padding: ${linkCssVar('menuPadding')};
  border-radius: ${linkCssVar('menuRadius')};

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
