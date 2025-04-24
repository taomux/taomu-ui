import { css } from '@emotion/react'

import { initGlobalCssVars, linkCssVar, mixinRgba } from '../../../styles'

export interface ToolbarItemCssVars {
  toolbarBg?: string
}

initGlobalCssVars('common', {
  toolbarBg: mixinRgba('colorFrontRgb', 0.1),
})

export const toolbarItemStyled = css`
  transition: ${linkCssVar('commonTransition')};
  cursor: pointer;
  border-radius: ${linkCssVar('radiusSM')};
  padding: 8px 12px;

  &:hover {
    background: ${linkCssVar('toolbarBg')};
  }
`

export const toolbarTooltipStyled = css`
  --tooltipOffset: 4px;

  &.toolbar-tooltip-top {
    margin-bottom: var(--tooltipOffset);
  }

  &.toolbar-tooltip-bottom {
    margin-top: var(--tooltipOffset);
  }

  &.toolbar-tooltip-left {
    margin-right: var(--tooltipOffset);
  }

  &.toolbar-tooltip-right {
    margin-left: var(--tooltipOffset);
  }
`

declare global {
  interface GlobalCssVars extends ToolbarItemCssVars {}
}
