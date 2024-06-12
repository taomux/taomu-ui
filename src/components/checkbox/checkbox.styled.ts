import { css } from '@emotion/react'

import { setGlobalCssVars, linkCssVar } from '../../styles'

export interface CheckboxCssVars {
  checkboxSize?: string | number
  checkboxColor?: string
  checkboxBorderColor?: string
  checkboxRadius?: number | string
}

setGlobalCssVars('common', {
  checkboxSize: 16,
  checkboxColor: linkCssVar('colorPrimary'),
  checkboxBorderColor: linkCssVar('colorBorder'),
  checkboxRadius: linkCssVar('radiusSM'),
})

export const checkboxStyled = css`
  cursor: pointer;
  user-select: none;
  display: inline-flex;
  align-items: center;
  gap: 3px;

  .checkbox-box {
    position: relative;
    appearance: none;
    cursor: pointer;

    &::before {
      width: ${linkCssVar('checkboxSize')};
      height: ${linkCssVar('checkboxSize')};
      content: '';
      display: flex;
      border-radius: ${linkCssVar('checkboxRadius')};
      border: 2px solid ${linkCssVar('checkboxBorderColor')};
      background-color: transparent;
      transition: all 0.24s;
    }

    &::after {
      content: '';
      width: 0;
      height: 100%;
      left: 0;
      top: 0;
      position: absolute;
      pointer-events: none;
      background-size: auto 100%;
      background-repeat: no-repeat;
      transition: width 0.3s;
      background-image: url("data:image/svg+xml,%3Csvg width='14px' height='14px' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='3.2,6.6 6,9.3 11,4' style='fill:none;stroke:white;stroke-width:1.6;'/%3E%3C/svg%3E");
    }

    &:checked {
      &::before {
        padding: 0;
        background: ${linkCssVar('checkboxColor')};
        border: 2px solid ${linkCssVar('checkboxColor')};
      }

      &::after {
        width: 100%;
      }

      &:hover {
        &::before {
          opacity: 0.8;
        }
      }
    }

    &:hover:not(:disabled):not(:checked) {
      &::before {
        border-color: ${linkCssVar('colorPrimary')};
      }
    }

    &:disabled {
      pointer-events: none;
      opacity: 0.8;
    }
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
`

declare global {
  interface GlobalCssVars extends CheckboxCssVars {}
}
