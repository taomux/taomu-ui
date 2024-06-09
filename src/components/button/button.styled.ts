import { css } from '@emotion/react'

import { setGlobalCssVars, linkCssVar, mixinRgba } from '../../styles'

export interface BtnCssVars {
  /** 按钮背景色 */
  btnBackground?: string
  /** 按钮悬浮背景色 */
  btnHoverBackground?: string
  /** 按钮文字颜色 */
  btnColor?: string
  /** 按钮悬浮文字颜色 */
  btnHoverColor?: string
  /** btnOutlineColor */
  btnOutlineColor?: string

  /** 按钮高度 */
  btnHeight?: number | string
  /** 按钮横向内边距 */
  btnPaddingX?: number | string
  /** 按钮圆角 */
  btnRadius?: number | string
}

setGlobalCssVars('common', {
  btnColor: linkCssVar('colorTextGray'),
  btnHoverColor: linkCssVar('colorTextDefault'),
  btnOutlineColor: mixinRgba('colorFrontRgb', 0.45),
  btnRadius: linkCssVar('radiusSM'),
  btnHeight: 30,
  btnPaddingX: 16,
})

setGlobalCssVars('light', {
  btnBackground: '#fff',
  btnHoverBackground: '#f2f3f5',
  btnOutlineColor: mixinRgba('colorFrontRgb', 0.15),
})

setGlobalCssVars('dark', {
  btnBackground: mixinRgba('colorFrontRgb', 0.15),
  btnHoverBackground: mixinRgba('colorFrontRgb', 0.25),
})

export const buttonStyled = css`
  height: ${linkCssVar('btnHeight')};
  background-color: ${linkCssVar('btnBackground')};
  border-radius: ${linkCssVar('btnRadius')};
  border: 1px solid ${linkCssVar('colorBorder')};
  padding: 0 ${linkCssVar('btnPaddingX')};
  color: ${linkCssVar('btnColor')};
  transition: all 0.2s;
  cursor: pointer;
  outline: transparent solid 0;

  &:hover {
    background-color: ${linkCssVar('btnHoverBackground')};
    color: ${linkCssVar('btnColor')};
  }

  &:active,
  &:focus {
    opacity: 0.8;
    outline: ${linkCssVar('btnOutlineColor')} solid 3px;
    outline-offset: 0;
  }
`

declare global {
  interface GlobalCssVars extends BtnCssVars {}
}
