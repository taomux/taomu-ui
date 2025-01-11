import { css } from '@emotion/react'

import { initGlobalCssVars, linkCssVar, parseCssVarDeclareStr } from '../../styles'

export interface LoadingCssVars {
  /** 加载器颜色 */
  loadingColor?: string
  /** 加载器轨道颜色 */
  loadingTrackColor?: string
  /** 加载器尺寸 */
  loadingSize?: number | string
  /** 线条粗细 */
  loadingWeight?: number | string
  /** 旋转速度 s | ms */
  loadingSpeed?: string
}

initGlobalCssVars('common', {
  loadingColor: linkCssVar('colorPrimary'),
})

export const loadingStyled = css`
  ${parseCssVarDeclareStr('loadingTrackColor', `color-mix(in srgb, ${linkCssVar('loadingColor')}, transparent 80%)`)}

  cursor: progress;
  display: inline-block;
  overflow: hidden;
  box-sizing: border-box;
  height: ${linkCssVar('loadingSize')};
  width: ${linkCssVar('loadingSize')};
  border-radius: 50%;
  border-width: ${linkCssVar('loadingWeight')};
  border-style: solid;
  border-color: ${linkCssVar('loadingTrackColor')};
  border-top-color: ${linkCssVar('loadingColor')};
  animation: animation-rotate ${linkCssVar('loadingSpeed')} linear infinite;

  @keyframes animation-rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

declare global {
  interface GlobalCssVars extends LoadingCssVars {}
}
