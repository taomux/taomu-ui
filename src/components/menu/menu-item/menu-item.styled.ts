import { css } from '@emotion/react'

import { setGlobalCssVars, linkCssVar, mixinRgba } from '../../../styles'

export interface MenuItemCssVars {
  menuItemPaddingX?: number | string
  menuItemPaddingY?: number | string
  menuItemRadius?: number | string
}

setGlobalCssVars('common', {
  menuItemPaddingX: 8,
  menuItemPaddingY: 6,
  menuItemRadius: linkCssVar('radiusSM'),
})

export const menuItemStyled = css`
  padding: ${linkCssVar('menuItemPaddingY')} ${linkCssVar('menuItemPaddingX')};
  border-radius: ${linkCssVar('menuItemRadius')};
  cursor: default;
  transition:
    background 0.2s,
    color 0.2s;

  &:hover:not(.disabled, .active) {
    background: ${mixinRgba('colorFrontRgb', 0.1)};
  }

  &.active {
    background: ${mixinRgba('colorPrimaryRgb', 0.75)};
    /* background: ${linkCssVar('colorPrimaryDark')}; */
    /* color: ${linkCssVar('colorPrimary')}; */
    color: #fff;
  }

  &.disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`

declare global {
  interface GlobalCssVars extends MenuItemCssVars {}
}
