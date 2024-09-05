import { css } from '@emotion/react'

import { setGlobalCssVars, linkCssVar, mixinRgba, parseCssVarDeclareStr } from '../../styles'

export interface BtnCssVars {
  /** 按钮背景色 */
  btnBackground?: string
  /** 按钮悬浮背景色 */
  btnBackgroundHover?: string
  /** 按钮文字颜色 */
  btnColor?: string
  /** 按钮悬浮文字颜色 */
  btnColorHover?: string
  /** 按钮外轮廓 */
  btnOutlineColor?: string
  /** 按钮边框颜色 */
  btnBorderColor?: string

  /** 按钮宽度 */
  btnWidth?: number | string
  /** 按钮高度 */
  btnHeight?: number | string
  /** 按钮横向内边距 */
  btnPaddingX?: number | string
  /** 按钮圆角 */
  btnRadius?: number | string
  /** 按钮文字大小 */
  btnFontSize?: number | string
}

setGlobalCssVars('common', {
  btnWidth: 'auto',
  btnColorHover: linkCssVar('colorTextDefault'),
  btnOutlineColor: mixinRgba('colorFrontRgb', 0.3),
  btnBorderColor: linkCssVar('colorBorder'),
  btnRadius: linkCssVar('radiusSM'),
  btnHeight: 30,
  btnPaddingX: 14,
  btnFontSize: 14,
})

setGlobalCssVars('light', {
  btnColor: linkCssVar('colorTextDefault'),
  btnBackground: '#fff',
  btnBackgroundHover: '#fafafa',
  btnOutlineColor: mixinRgba('colorFrontRgb', 0.05),
})

setGlobalCssVars('dark', {
  btnColor: linkCssVar('colorTextGray'),
  btnBackground: mixinRgba('colorFrontRgb', 0.1),
  btnBackgroundHover: mixinRgba('colorFrontRgb', 0.25),
})

export const buttonStyled = css`
  user-select: none;
  transition: all 0.25s;
  outline: transparent solid 0;
  overflow: hidden;
  position: relative;

  width: ${linkCssVar('btnWidth')};
  height: ${linkCssVar('btnHeight')};
  background-color: ${linkCssVar('btnBackground')};
  border-radius: ${linkCssVar('btnRadius')};
  border: 1px solid ${linkCssVar('btnBorderColor')};
  padding: 0 ${linkCssVar('btnPaddingX')};
  color: ${linkCssVar('btnColor')};
  font-size: ${linkCssVar('btnFontSize')};

  &[disabled]:not(.is-loading) {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &.is-loading {
    cursor: progress;
  }

  &:hover:not([disabled]) {
    background-color: ${linkCssVar('btnBackgroundHover')};
    color: ${linkCssVar('btnColorHover')};
  }

  &.show-outline:not([disabled]) {
    outline-offset: 0px;
    &:active,
    &:focus {
      outline-offset: 0;
      outline: ${linkCssVar('btnOutlineColor')} solid 3px;
    }
  }

  &.btn-primary {
    ${parseCssVarDeclareStr('btnBackground', linkCssVar('colorPrimaryDark'))};
    ${parseCssVarDeclareStr('btnOutlineColor', mixinRgba('colorPrimaryDarkRgb', 0.3))};
    ${parseCssVarDeclareStr('btnBackgroundHover', mixinRgba('colorPrimaryDarkRgb', 0.75))};
    ${parseCssVarDeclareStr('btnColor', '#fff')};
    ${parseCssVarDeclareStr('btnColorHover', '#fff')};
  }

  &.btn-warning {
    ${parseCssVarDeclareStr('btnBackground', linkCssVar('colorWarning'))};
    ${parseCssVarDeclareStr('btnOutlineColor', mixinRgba('colorWarningRgb', 0.3))};
    ${parseCssVarDeclareStr('btnBackgroundHover', `color-mix(in srgb, ${linkCssVar('btnBackground')}, #000 15%)`)};
    ${parseCssVarDeclareStr('btnColor', '#fff')};
    ${parseCssVarDeclareStr('btnColorHover', '#fff')};
  }

  &.btn-danger {
    ${parseCssVarDeclareStr('btnBackground', linkCssVar('colorError'))};
    ${parseCssVarDeclareStr('btnOutlineColor', mixinRgba('colorErrorRgb', 0.3))};
    ${parseCssVarDeclareStr('btnBackgroundHover', `color-mix(in srgb, ${linkCssVar('btnBackground')}, #000 15%)`)};
    ${parseCssVarDeclareStr('btnColor', '#fff')};
    ${parseCssVarDeclareStr('btnColorHover', '#fff')};
  }

  &.btn-link {
    ${parseCssVarDeclareStr('btnBackground', 'transparent')};
    ${parseCssVarDeclareStr('btnBackgroundHover', 'transparent')};
    ${parseCssVarDeclareStr('btnOutlineColor', 'transparent')};
    ${parseCssVarDeclareStr('btnBorderColor', 'transparent')};
    ${parseCssVarDeclareStr('btnColor', linkCssVar('colorTextLink'))};
    ${parseCssVarDeclareStr('btnColorHover', linkCssVar('colorTextLinkHover'))};
    &:hover {
      text-shadow: 0 0 24px ${linkCssVar('colorTextLinkHover')};
    }
  }

  &.btn-ghost:not(.btn-default):not(.btn-link) {
    background-color: transparent;
    ${parseCssVarDeclareStr('btnBorderColor', linkCssVar('btnBackground'))};
    ${parseCssVarDeclareStr('btnColor', linkCssVar('btnBackground'))};

    &:not([disabled]) {
      &:hover,
      &:active {
        background-color: transparent;
        box-shadow: 0 0 12px 0px color-mix(in srgb, ${linkCssVar('btnBackground')}, transparent 70%);
        ${parseCssVarDeclareStr('btnBorderColor', linkCssVar('btnBackgroundHover'))};
        ${parseCssVarDeclareStr('btnColorHover', linkCssVar('btnBackground'))};
      }
    }
  }

  &.btn-glass {
    backdrop-filter: blur(5px);
    &:not(.btn-default):not(.btn-link) {
      color: ${linkCssVar('btnBackground')};
      border-color: ${linkCssVar('btnBackground')};

      &.btn-primary {
        background-color: ${mixinRgba('colorPrimaryRgb', 0.15)};
      }
      &.btn-warning {
        background-color: ${mixinRgba('colorWarningRgb', 0.15)};
      }
      &.btn-danger {
        background-color: ${mixinRgba('colorErrorRgb', 0.15)};
      }

      &:not([disabled]) {
        &:hover,
        &:active {
          box-shadow: 0 0 12px 0px color-mix(in srgb, ${linkCssVar('btnBackground')}, transparent 70%);
          ${parseCssVarDeclareStr('btnColorHover', linkCssVar('btnBackground'))};
        }
      }
    }
  }

  .btn-loader-wrap {
    position: absolute;
    z-index: 1;
    left: 0;
    bottom: 0;
    width: 100%;
  }

  &.btn-default,
  &.btn-primary,
  &.btn-warning,
  &.btn-danger {
    --btn-progress-bar-bg-color: rgba(225, 225, 225, 0.75);
    .progress-bar.striped {
      background-image: linear-gradient(
        var(--progress-bar-striped-angle),
        var(--btn-progress-bar-bg-color) 25%,
        transparent 25%,
        transparent 50%,
        var(--btn-progress-bar-bg-color) 50%,
        var(--btn-progress-bar-bg-color) 75%,
        transparent 75%,
        transparent
      );
    }

    &.btn-glass,
    &.btn-ghost {
      --btn-progress-bar-bg-color: ${mixinRgba('colorBackgroundRgb', 0.5)};
    }
  }

  &.btn-default {
    --btn-progress-bar-bg-color: ${mixinRgba('colorFrontRgb', 0.35)};

    .progress-bar {
      ${parseCssVarDeclareStr('progressColor', mixinRgba('colorPrimaryRgb', 0.4))};
    }
  }

  &.btn-link {
    .progress-bar {
      ${parseCssVarDeclareStr('progressColor', mixinRgba('colorInfoRgb', 0.45))};
    }
  }

  &.btn-primary {
    .progress-bar {
      ${parseCssVarDeclareStr('progressColor', `color-mix(in srgb, ${linkCssVar('btnBackground')}, #000 20%)`)};
    }
  }

  &.btn-warning {
    .progress-bar {
      ${parseCssVarDeclareStr('progressColor', `color-mix(in srgb, ${linkCssVar('btnBackground')}, #000 12%)`)};
    }
  }

  &.btn-danger {
    .progress-bar {
      ${parseCssVarDeclareStr('progressColor', `color-mix(in srgb, ${linkCssVar('btnBackground')}, #000 16%)`)};
    }
  }
`

declare global {
  interface GlobalCssVars extends BtnCssVars {}
}
