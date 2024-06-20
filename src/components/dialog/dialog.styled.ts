import { css } from '@emotion/react'

import { setGlobalCssVars, linkCssVar, mixinRgba } from '../../styles'

export interface DialogCssVars {
  dialogBackground?: string
  dialogTextColor?: string

  dialogWidth?: number | string
  dialogHeaderHeight?: number | string
  dialogRadius?: number | string
  dialogPadding?: number | string
}

setGlobalCssVars('common', {
  dialogBackground: mixinRgba('colorBackgroundRgb', 0.9),
  dialogTextColor: linkCssVar('colorTextDefault'),

  dialogWidth: 500,
  dialogHeaderHeight: 42,
  dialogRadius: linkCssVar('radiusMD'),
  dialogPadding: 16,
})

export const dialogStyled = css`
  width: ${linkCssVar('dialogWidth')};
  background-color: ${linkCssVar('dialogBackground')};
  border-radius: ${linkCssVar('dialogRadius')};
  position: relative;

  .dialog-header {
    position: sticky;
    z-index: 2;
    border-radius: ${linkCssVar('dialogRadius')} ${linkCssVar('dialogRadius')} 0 0;
    height: ${linkCssVar('dialogHeaderHeight')};
    padding: 0 ${linkCssVar('dialogPadding')};
  }

  .close-btn {
    border-radius: 4px;
    transition: background 0.2s;
    position: absolute;
    z-index: 10;
    right: calc(${linkCssVar('dialogPadding')} - 6px);
    padding: 3px;
    top: 9px;

    svg {
      display: block;
      stroke: ${linkCssVar('colorTextGray')};
      transition: stroke 0.2s;
    }

    &:hover:not(.disabled) {
      background-color: ${linkCssVar('btnBackgroundHover')};
      svg {
        stroke: ${linkCssVar('colorTextDefault')};
      }
    }

    &.disabled {
      cursor: not-allowed;
      opacity: 0.5;
      pointer-events: none;
    }
  }

  .dialog-content {
    padding: ${linkCssVar('dialogPadding')};
  }

  .dialog-footer {
    padding: 12px ${linkCssVar('dialogPadding')};
  }

  &.show-close-icon {
    .dialog-title {
      padding-right: 22px;
    }
  }
`

declare global {
  interface GlobalCssVars extends DialogCssVars {}
}
