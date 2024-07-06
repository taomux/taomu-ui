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
  menuItemRadius: 4,
})

export const menuItemStyled = css`
  padding: ${linkCssVar('menuItemPaddingY')} ${linkCssVar('menuItemPaddingX')};
  border-radius: ${linkCssVar('menuItemRadius')};
  cursor: default;
  transition: background 0.25s;

  &:hover:not(.disabled, .active) {
    background-color: ${mixinRgba('colorFrontRgb', 0.06)};
  }

  &.active {
    background-color: ${mixinRgba('colorPrimaryRgb', 0.1)};
    color: ${linkCssVar('colorPrimary')};
  }

  &.disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`

declare global {
  interface GlobalCssVars extends MenuItemCssVars {}
}
