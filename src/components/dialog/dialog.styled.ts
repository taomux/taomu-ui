import { css } from '@emotion/react'

import { initGlobalCssVars, linkCssVar } from '../../styles'

export interface DialogCssVars {
  dialogBackground?: string
  dialogTextColor?: string

  dialogWidth?: number | string
  dialogHeaderHeight?: number | string
  dialogRadius?: number | string
  dialogPadding?: number | string
}

initGlobalCssVars('common', {
  dialogBackground: linkCssVar('colorBackground'),
  dialogTextColor: linkCssVar('colorTextDefault'),

  dialogWidth: 480,
  dialogHeaderHeight: 42,
  dialogRadius: linkCssVar('radiusMD'),
  dialogPadding: 16,
})

export const dialogStyled = css`
  width: ${linkCssVar('dialogWidth')};
  background: ${linkCssVar('dialogBackground')};
  border-radius: ${linkCssVar('dialogRadius')};
  position: relative;

  .dialog-header {
    height: ${linkCssVar('dialogHeaderHeight')};
    padding: 0 ${linkCssVar('dialogPadding')};
  }

  .close-btn {
    border-radius: 4px;
    position: absolute;
    z-index: 10;
    transition: ${linkCssVar('commonTransition')};
    right: calc(${linkCssVar('dialogPadding')} - 6px);
    padding: 3px;
    top: 9px;

    svg {
      display: block;
      stroke: ${linkCssVar('colorTextGray')};
      transition: ${linkCssVar('commonTransition')};
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

  &.sticky-frame {
    .dialog-header {
      position: sticky;
      top: 0;
      border-radius: ${linkCssVar('dialogRadius')} ${linkCssVar('dialogRadius')} 0 0;
      backdrop-filter: blur(20px);
    }
    .dialog-footer {
      position: sticky;
      bottom: 0;
      border-radius: 0 0 ${linkCssVar('dialogRadius')} ${linkCssVar('dialogRadius')};
      backdrop-filter: blur(20px);
    }
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
