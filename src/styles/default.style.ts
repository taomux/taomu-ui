import { css } from '@emotion/react'
import atomicCssStr from 'atomic-cls/stringify'

import { linkCssVar } from './utils'

export const atomicCssStyled = css`
  ${atomicCssStr}
`

export const defaultStyled = css`
  :root {
    --ac-color-primary: ${linkCssVar('colorPrimary')};
    --ac-color-primary-light: color-mix(in srgb, ${linkCssVar('colorPrimary')}, #fff 45%);
    --ac-color-primary-dark: color-mix(in srgb, ${linkCssVar('colorPrimary')}, #000 15%);

    --ac-color-info: ${linkCssVar('colorInfo')};
    --ac-color-success: ${linkCssVar('colorSuccess')};
    --ac-color-warning: ${linkCssVar('colorWarning')};
    --ac-color-error: ${linkCssVar('colorError')};

    --ac-color-background: ${linkCssVar('colorBackground')};
    --ac-color-text-title: ${linkCssVar('colorTextTitle')};
    --ac-color-text-gray: ${linkCssVar('colorTextGray')};
    --ac-color-text-default: ${linkCssVar('colorTextDefault')};
    --ac-color-text-light: ${linkCssVar('colorTextLight')};

    --ac-color-border: ${linkCssVar('colorBorder')};
    --ac-color-border-split: ${linkCssVar('colorBorderSplit')};

    --ac-color-shadow: ${linkCssVar('colorShadow')};

    background: ${linkCssVar('colorBackgroundRoot')};
    color: ${linkCssVar('colorTextDefault')};
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: ${linkCssVar('fontSize')};
    text-rendering: optimizeLegibility;
  }
`
