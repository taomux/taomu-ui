import { css } from '@emotion/react'

import { initGlobalCssVars, linkCssVar, mixinRgba, parseCssVarDeclareStr } from '../../styles'

export interface SwitchCssVars {
  switchColor?: string
  switchDefaultColor?: string
  switchBorderColor?: string
  switchWidth?: number | string
  switchHeight?: number | string
  switchRadius?: number | string
  switchOutlineColor?: string
  switchBoxBg?: string
  switchBoxBgActive?: string
}

initGlobalCssVars('common', {
  switchColor: linkCssVar('colorPrimary'),
  switchWidth: 34,
  switchHeight: 18,
  switchRadius: linkCssVar('radiusSM'),
  switchBorderColor: linkCssVar('colorBorder'),
  switchOutlineColor: mixinRgba('colorPrimaryRgb', 0.3),
  switchBoxBg: mixinRgba('colorFrontRgb', 0.1),
  switchBoxBgActive: linkCssVar('switchColor'),
})

initGlobalCssVars('light', {
  switchDefaultColor: '#fff',
  switchBorderColor: 'colorBorderSplit',
})

initGlobalCssVars('dark', {
  switchDefaultColor: mixinRgba('colorFrontRgb', 0.6),
})

export const switchStyled = css`
  --td: 0.25s;

  background-color: ${linkCssVar('switchBoxBg')};
  border-radius: ${linkCssVar('switchRadius')};
  width: ${linkCssVar('switchWidth')};
  height: ${linkCssVar('switchHeight')};
  border: 1px solid ${linkCssVar('switchBorderColor')};
  outline: transparent solid 0;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: border var(--td), outline var(--td), background var(--td);

  .switch-thumb {
    position: absolute;
    width: 45%;
    height: calc(100% - 5px);
    top: 50%;
    left: 2.5px;
    transform: translateY(-50%);
    transition: all 0.25s;

    :not(.no-thumb-style) {
      border-radius: inherit;
      background-color: ${linkCssVar('switchDefaultColor')};
      box-shadow: ${linkCssVar('boxShadowSM')};
    }
  }

  &:not(.disabled) {
    &:hover {
      border-color: ${linkCssVar('switchColor')};
    }

    &:active {
      .switch-thumb {
        width: 60%;
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
    background-color: ${linkCssVar('switchBoxBgActive')};
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
