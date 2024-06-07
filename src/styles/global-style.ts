import { css } from '@emotion/react'
import { mapInlineCssVarsToString } from 'taomu-toolkit'

export type GlobalVars = Record<string, string | number>

export type ThemeMode = 'light' | 'dark'

const globalCssVars: Record<ThemeMode, GlobalVars> = {
  light: {
    colorPrimary: '#1ea7fd',
    colorBackground: '#f5f5f5',
    colorTextBase: '#333',
    colorTextSecondary: '#999',
    colorTextTertiary: '#ccc',
    colorTextQuaternary: '#e6e6e6',
    colorBgContainer: '#fff',
    colorBgElevated: '#f5f5f5',
    colorBgContainerDisabled: '#f5f5f5',
  },

  dark: {
    colorPrimary: '#1ea7fd',
    colorBackground: '#222',
    colorTextBase: '#fff',
    colorTextSecondary: '#999',
    colorTextTertiary: '#ccc',
    colorTextQuaternary: '#e6e6e6',
    colorBgContainer: '#333',
    colorBgElevated: '#222',
    colorBgContainerDisabled: '#222',
  },
}

export function setGlobalCssVars(themeMode: ThemeMode, vars: GlobalVars) {
  Object.assign(globalCssVars[themeMode], vars)
}

export function getGlobalStyled() {
  return css`
    :root[data-theme='light'] {
      ${mapInlineCssVarsToString(globalCssVars.light)}
    }

    :root[data-theme='dark'] {
      ${mapInlineCssVarsToString(globalCssVars.dark)}
    }

    :root {
      background-color: var(--colorBackground);
      color: var(--colorTextBase);
    }
  `
}
