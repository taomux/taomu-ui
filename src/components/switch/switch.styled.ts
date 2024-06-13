import { css } from '@emotion/react'

import { setGlobalCssVars, linkCssVar, mixinRgba, parseCssVarDeclareStr } from '../../styles'

export interface SwitchCssVars {
  switchColor?: string
  switchDefaultColor?: string
  switchBorderColor?: string
  switchWidth?: number | string
  switchHeight?: number | string
  switchRadius?: number | string
  switchOutlineColor?: string
  switchBoxBackground?: string
}

setGlobalCssVars('common', {
  switchColor: linkCssVar('colorPrimary'),
  switchWidth: 34,
  switchHeight: 18,
  switchRadius: linkCssVar('radiusSM'),
  switchBorderColor: linkCssVar('colorBorder'),
  switchOutlineColor: mixinRgba('colorPrimaryRgb', 0.3),
  switchBoxBackground: mixinRgba('colorFrontRgb', 0.1),
})

setGlobalCssVars('light', {
  switchDefaultColor: '#fff',
  switchBorderColor: 'transparent',
})

setGlobalCssVars('dark', {
  switchDefaultColor: mixinRgba('colorFrontRgb', 0.6),
})

export const switchStyled = css`
  --td: 0.25s;

  background-color: ${linkCssVar('switchBoxBackground')};
  border-radius: ${linkCssVar('switchRadius')};
  width: ${linkCssVar('switchWidth')};
  height: ${linkCssVar('switchHeight')};
  border: 1px solid ${linkCssVar('switchBorderColor')};
  outline: transparent solid 0;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition:
    border var(--td),
    outline var(--td),
    background var(--td);

  .switch-thumb {
    position: absolute;
    width: 45%;
    height: calc(100% - 5px);
    top: 50%;
    left: 2.5px;
    transform: translateY(-50%);
    border-radius: inherit;
    background-color: ${linkCssVar('switchDefaultColor')};
    box-shadow: ${linkCssVar('boxShadowSM')};
    transition: all 0.25s;
  }

  &:not(.disabled) {
    &:hover {
      border-color: ${linkCssVar('switchColor')};
    }

    &:active {
      .switch-thumb {
        width: 55%;
      }
    }

    &.show-outline {
      &:active,
      &:focus {
        outline: ${linkCssVar('switchOutlineColor')} solid 2px;
      }
    }
  }

  &.active {
    background-color: ${linkCssVar('switchColor')};
    .switch-thumb {
      left: calc(100% - 2.5px);
      transform: translateX(-100%) translateY(-50%);
    }
  }

  &.disabled:not(.is-loading) {
    cursor: not-allowed;
    opacity: 0.8;
    .switch-thumb {
      opacity: 0.8;
      background-color: ${mixinRgba('colorFrontRgb', 0.2)};
    }
  }

  &.is-loading {
    cursor: progress;
    &:not(.active) {
      ${parseCssVarDeclareStr('loadingColor', `color-mix(in srgb, ${linkCssVar('switchColor')}, #fff 65%)`)};
    }
  }
`

declare global {
  interface GlobalCssVars extends SwitchCssVars {}
}
