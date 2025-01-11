import { css } from '@emotion/react'

import { initGlobalCssVars, linkCssVar } from '../../styles'

export interface MenuCssVars {
  menuWidth?: React.CSSProperties['width']
  menuHeight?: React.CSSProperties['height']
  menuBackground?: React.CSSProperties['background']
  menuPadding?: React.CSSProperties['padding']
  menuRadius?: React.CSSProperties['borderRadius']
  menuGap?: React.CSSProperties['gap']
}

initGlobalCssVars('common', {
  menuWidth: 'auto',
  menuHeight: 'auto',
  menuBackground: linkCssVar('colorBackground'),
  menuPadding: 4,
  menuRadius: linkCssVar('radiusSM'),
})

export const menuStyled = css`
  overflow-y: auto;
  height: ${linkCssVar('menuHeight')};
  width: ${linkCssVar('menuWidth')};
  background: ${linkCssVar('menuBackground')};
  padding: ${linkCssVar('menuPadding')};
  border-radius: ${linkCssVar('menuRadius')};
  gap: ${linkCssVar('menuGap')};

  &.disable-user-select {
    user-select: none;
  }
`

declare global {
  interface GlobalCssVars extends MenuCssVars {}
}
