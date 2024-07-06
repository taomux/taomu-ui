import { css } from '@emotion/react'

import { setGlobalCssVars, linkCssVar, parseCssVarDeclareStr } from '../../styles'

export interface ProgressCssVars {
  /* 进度条宽度 */
  progressWidth?: number | string
  /* 进度条高度 */
  progressHeight?: number | string
  /* 外围圆角 */
  progressRadius?: number | string
  /* 进度条圆角 */
  progressBarRadius?: number | string
  /* 进度条条纹宽度 */
  progressStripedSize?: number | string
  /* 进度条条纹动画速度，默认 0.6s ，越小越快 */
  progressSpeed?: string
  /* 进度条颜色 */
  progressColor?: string
  /* 进度条背景混入颜色 */
  progressBackgroundMixinColor?: string
}

setGlobalCssVars('common', {
  progressWidth: '100%',
  progressHeight: 18,
  progressRadius: linkCssVar('radiusSM'),
  progressBarRadius: linkCssVar('progressRadius'),
  progressStripedSize: '1.6em',
  progressSpeed: '0.6s',
  progressColor: linkCssVar('colorPrimary'),
  progressBackgroundMixinColor: 'transparent',
})

export const progressStyled = css`
  --progress-bar-striped-angle: 45deg;
  --progress-bar-animation-proportion: -1;

  border-radius: ${linkCssVar('progressRadius')};
  width: ${linkCssVar('progressWidth')};
  height: ${linkCssVar('progressHeight')};
  background-color: color-mix(in srgb, ${linkCssVar('progressColor')}, ${linkCssVar('progressBackgroundMixinColor')} 75%);
  overflow: hidden;
  position: relative;
  color: #fff;

  &.progress-info {
    ${parseCssVarDeclareStr('progressColor', linkCssVar('colorInfo'))};
  }

  &.progress-success {
    ${parseCssVarDeclareStr('progressColor', linkCssVar('colorSuccess'))};
  }

  &.progress-warning {
    ${parseCssVarDeclareStr('progressColor', linkCssVar('colorWarning'))};
  }

  &.progress-error {
    ${parseCssVarDeclareStr('progressColor', linkCssVar('colorError'))};
  }

  &.progress-gray {
    ${parseCssVarDeclareStr('progressColor', linkCssVar('colorTextLight'))};
  }

  &.striped-reverse {
    --progress-bar-striped-angle: -45deg;
  }

  &.striped-animation-reverse {
    --progress-bar-animation-proportion: 1;
  }

  &.progress-transition {
    .progress-bar {
      transition: width 0.3s;
    }
  }

  .progress-bar {
    width: ${linkCssVar('progressWidth')};
    height: inherit;
    background-color: ${linkCssVar('progressColor')};
    border-radius: ${linkCssVar('progressBarRadius')};
    position: absolute;
    left: 0;
    top: 0;

    &.striped {
      background-image: linear-gradient(
        var(--progress-bar-striped-angle),
        rgba(${linkCssVar('colorFrontRgb')}, 0.15) 25%,
        transparent 25%,
        transparent 50%,
        rgba(${linkCssVar('colorFrontRgb')}, 0.15) 50%,
        rgba(${linkCssVar('colorFrontRgb')}, 0.15) 75%,
        transparent 75%,
        transparent
      );
      background-size: ${linkCssVar('progressStripedSize')} ${linkCssVar('progressStripedSize')};

      &.animated {
        animation: ${linkCssVar('progressSpeed')} linear infinite progress-bar-stripes;
      }
    }

    @keyframes progress-bar-stripes {
      0% {
        background-position-x: calc(var(--progress-bar-animation-proportion) * ${linkCssVar('progressStripedSize')});
      }
    }
  }
`

declare global {
  interface GlobalCssVars extends ProgressCssVars {}
}
