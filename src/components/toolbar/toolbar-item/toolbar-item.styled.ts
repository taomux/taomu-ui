import { css } from '@emotion/react'

import { setGlobalCssVars, linkCssVar, mixinRgba } from '../../../styles'

export interface ToolbarItemCssVars {
  toolbarItemBackground?: string
  toolbarItemBackgroundHover?: string
  toolbarItemPaddingX?: string | number
  toolbarItemPaddingY?: string | number
  toolbarItemGap?: string | number
}

setGlobalCssVars('common', {
  toolbarItemBackground: 'transparent',
  toolbarItemBackgroundHover: mixinRgba('colorFrontRgb', 0.1),
  toolbarItemPaddingX: 12,
  toolbarItemPaddingY: 6,
  toolbarItemGap: 6,
})

export const toolbarItemStyled = css`
  background: ${linkCssVar('toolbarItemBackground')};
  border-radius: ${linkCssVar('radiusSM')};
  padding: ${linkCssVar('toolbarItemPaddingY')} ${linkCssVar('toolbarItemPaddingX')};
  gap: ${linkCssVar('toolbarItemGap')};
  transition: background 0.2s;
  cursor: default;
  user-select: none;

  &:hover {
    background-color: ${linkCssVar('toolbarItemBackgroundHover')};
  }
`

declare global {
  interface GlobalCssVars extends ToolbarItemCssVars {}
}
