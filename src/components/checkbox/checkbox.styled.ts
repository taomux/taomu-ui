import { css } from '@emotion/react'

import { setGlobalCssVars, linkCssVar, mixinRgba } from '../../styles'

export interface CheckboxCssVars {
  checkboxSize?: string | number
  checkboxColor?: string
  checkboxBorderColor?: string
  checkboxRadius?: number | string
  checkboxBoxBackground?: string
  checkboxOutlineColor?: string
}

setGlobalCssVars('common', {
  checkboxSize: 15,
  checkboxColor: linkCssVar('colorPrimary'),
  checkboxBorderColor: linkCssVar('colorBorder'),
  checkboxRadius: linkCssVar('radiusSM'),
  checkboxOutlineColor: mixinRgba('colorPrimaryRgb', 0.3),
})

setGlobalCssVars('dark', {
  checkboxBoxBackground: mixinRgba('colorFrontRgb', 0.1),
})

export const checkboxStyled = css`
  --td: 0.24s;

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
      background-color: ${linkCssVar('checkboxBoxBackground')};
      transition: all var(--td);
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
      transition: width var(--td);
      background-image: url("data:image/svg+xml,%3Csvg width='14px' height='14px' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='3.2,6.6 6,9.3 11,4' style='fill:none;stroke:white;stroke-width:1.6;'/%3E%3C/svg%3E");
    }

    &:checked {
      &::before {
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

    &:hover {
      &::before {
        opacity: 0.8;
      }
    }
  }

  &.show-outline {
    .checkbox-box:not([disabled]) {
      &::before {
        outline-offset: 3px;
        outline: transparent solid;
      }

      &:active,
      &:focus {
        &::before {
          outline-offset: 0;
          outline: ${linkCssVar('checkboxOutlineColor')} solid 2px;
        }
      }
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
