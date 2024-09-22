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
  position: relative;
  overflow: hidden;
  color: ${linkCssVar('colorTextDefault')};

  &:hover:not(.disabled) {
    background: ${mixinRgba('colorFrontRgb', 0.1)};
    color: ${linkCssVar('colorTextTitle')};
  }

  &.style-mode-default {
    &.active {
      background: ${mixinRgba('colorPrimaryRgb', 0.75)};
      color: #fff;
    }
  }

  &.disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  .taomu-menu-item-active-block {
    --size: 3px;
    background-color: ${linkCssVar('colorPrimary')};
    position: absolute;
    width: var(--size);
    height: 50%;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    border-radius: 5px;

    &.horizontal {
      transform: translateX(-50%);
      height: var(--size);
      width: 50%;
      left: 50%;
      top: 0;
      top: unset;
      bottom: 0;
    }
  }
`

declare global {
  interface GlobalCssVars extends MenuItemCssVars {}
}
