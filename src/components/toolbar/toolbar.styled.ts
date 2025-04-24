import { css } from '@emotion/react'

import { initGlobalCssVars, linkCssVar } from '../../styles'

export interface ToolbarCssVars {
  toolbarWidth?: number | string
  toolbarPadding?: number | string
}

initGlobalCssVars('common', {
  toolbarWidth: 68,
  toolbarPadding: 0,
})

export const toolbarStyled = css`
  --toolbar-width: ${linkCssVar('toolbarWidth')};

  box-sizing: border-box;
  padding: ${linkCssVar('toolbarPadding')};

  &.toolbar-position-left,
  &.toolbar-position-right {
    top: 0;
    flex-direction: column;
    width: var(--toolbar-width);
    height: 100vh;
  }

  &.toolbar-position-top,
  &.toolbar-position-bottom {
    left: 0;
    flex-direction: row;
    height: ${linkCssVar('toolbarWidth')};
    width: 100%;
  }

  &.toolbar-fixed {
    position: fixed;
    &.toolbar-position-left {
      left: 0;
    }
    &.toolbar-position-right {
      right: 0;
    }
    &.toolbar-position-top {
      top: 0;
    }
    &.toolbar-position-bottom {
      bottom: 0;
    }
  }
`

declare global {
  interface GlobalCssVars extends ToolbarCssVars {}
}
