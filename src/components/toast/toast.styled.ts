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
  toastPadding: '8px 14px',
})

export const toastStyled = css`
  border-radius: ${linkCssVar('toastRadius')};
  color: ${linkCssVar('toastColor')};
  background: ${linkCssVar('toastBackground')};
  padding: ${linkCssVar('toastPadding')};
  pointer-events: visible;

  .toast-close-btn {
    cursor: pointer;
    border-radius: 4px;
    transition: ${linkCssVar('commonTransition')};
    padding: 2px;
    margin: -3px;
    position: relative;
    left: 3px;
    top: 0.5px;

    svg {
      display: block;
      stroke: ${linkCssVar('colorTextGray')};
      transition: ${linkCssVar('commonTransition')};
    }

    &:hover:not(.disabled) {
      background-color: ${linkCssVar('btnBackgroundHover')};
      svg {
        stroke: ${linkCssVar('colorTextDefault')};
      }
    }

    &.disabled {
      cursor: not-allowed;
      opacity: 0.5;
      pointer-events: none;
    }
  }
`

export const toastContainerStyled = css`
  .taomu-toast-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    pointer-events: none;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding-top: 4vh;
  }
`

declare global {
  interface GlobalCssVars extends ToastCssVars {}
}
