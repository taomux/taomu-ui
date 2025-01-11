import { css } from '@emotion/react'

import { initGlobalCssVars, linkCssVar } from '../../styles'

export interface ToastCssVars {
  toastColor?: string
  toastBackground?: string
  toastRadius?: number | string
  toastPadding?: number | string
}

initGlobalCssVars('common', {
  toastColor: linkCssVar('colorFront'),
  toastBackground: linkCssVar('colorBackground'),
  toastRadius: linkCssVar('radiusSM'),
  toastPadding: '6px 12px',
})

export const toastStyled = css`
  border-radius: ${linkCssVar('toastRadius')};
  color: ${linkCssVar('toastColor')};
  background: ${linkCssVar('toastBackground')};
  padding: ${linkCssVar('toastPadding')};
  display: inline-block;
  pointer-events: visible;
`

export const toastContainerStyled = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  pointer-events: none !important;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding-top: 4vh;
`

declare global {
  interface GlobalCssVars extends ToastCssVars {}
}
