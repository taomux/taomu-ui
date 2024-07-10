import { css } from '@emotion/react'

import { mixinRgba } from '../utils'

export const minScrollBar = css`
  :root {
    --scrollbar-size: 6px;
    --scrollbar-thumb-bg: ${mixinRgba('colorFrontRgb', 0.2)};
    --scrollbar-track-bg: ${mixinRgba('colorFrontRgb', 0.05)};
    --scrollbar-thumb-hover-bg: ${mixinRgba('colorFrontRgb', 0.3)};

    &::-webkit-scrollbar {
      height: var(--scrollbar-size);
      width: var(--scrollbar-size);
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      border: 1px solid var(--scrollbar-track-bg);
      background-color: var(--scrollbar-thumb-bg);
    }

    &::-webkit-scrollbar-track {
      // border-radius: 10px;
      background-color: var(--scrollbar-track-bg);
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: var(--scrollbar-thumb-hover-bg);
    }
  }
`
