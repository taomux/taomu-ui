import { css } from '@emotion/react'

import { setGlobalCssVars, linkCssVar } from '../../styles'

export interface PopupCssVars {
  zIndex?: string
  overlayBackground?: string
}

setGlobalCssVars('common', {
  zIndex: '1000',
  overlayBackground: 'rgba(0, 0, 0, 0.4)',
})

export const popupStyled = css`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${linkCssVar('zIndex')};

  &.background-event {
    pointer-events: none;
    .popup-overlay {
      pointer-events: none;
    }
    .popup-content {
      pointer-events: all;
    }
  }

  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    background: ${linkCssVar('overlayBackground')};
  }

  .popup-content {
    &.target-relative-position {
      position: absolute;
    }
  }

  &.position-absolute {
    &.position-center {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &.position-dialog-center {
      overflow-y: auto;
      overflow-x: hidden;

      .popup-content {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    &.position-top {
      .popup-content {
        position: absolute;
        top: 0;
        width: 100vw;
      }
    }

    &.position-bottom {
      .popup-content {
        position: absolute;
        bottom: 0;
        width: 100vw;
      }
    }

    &.position-left {
      .popup-content {
        position: absolute;
        left: 0;
        height: 100vh;
      }
    }

    &.position-right {
      .popup-content {
        position: absolute;
        right: 0;
        height: 100vh;
      }
    }

    &.position-center-top,
    &.position-top-center {
      display: flex;
      align-items: flex-start;
      justify-content: center;
    }

    &.position-bottom,
    &.position-center-bottom,
    &.position-bottom-center {
      display: flex;
      align-items: flex-end;
      justify-content: center;
    }

    &.position-left,
    &.position-left-center,
    &.position-center-left {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    &.position-right,
    &.position-right-center,
    &.position-center-right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    &.position-left-top,
    &.position-top-left {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
    }

    &.position-left-bottom,
    &.position-bottom-left {
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
    }

    &.position-right-top,
    &.position-top-right {
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;
    }

    &.position-right-bottom,
    &.position-bottom-right {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
    }
  }

  &.popup-fixed-position-top-left,
  &.popup-fixed-position-top-center,
  &.popup-fixed-position-top-right {
    padding-bottom: var(--targetOffset);
  }

  &.popup-fixed-position-bottom-left,
  &.popup-fixed-position-bottom-center,
  &.popup-fixed-position-bottom-right {
    padding-top: var(--targetOffset);
  }

  &.popup-fixed-position-left-top,
  &.popup-fixed-position-left-center,
  &.popup-fixed-position-left-bottom {
    padding-right: var(--targetOffset);
  }

  &.popup-fixed-position-right-top,
  &.popup-fixed-position-right-center,
  &.popup-fixed-position-right-bottom {
    padding-left: var(--targetOffset);
  }
`

declare global {
  interface GlobalCssVars extends PopupCssVars {}
}
