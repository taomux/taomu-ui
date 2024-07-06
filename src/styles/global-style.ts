import { css, type SerializedStyles } from '@emotion/react'
import { mapInlineCssVarsToString } from 'taomu-toolkit'

import { ThemeMode, CssVars, GlobalStyledItem, TAOMU_PREFIX } from './defines'
import { COMMON_GLOBAL_VARS, LIGHT_GLOBAL_VARS, DARK_GLOBAL_VARS } from './themes'
import { linkCssVar, mixinRgba } from './utils'

const globalCssVars: Record<ThemeMode, GlobalCssVars> = {
  common: { ...COMMON_GLOBAL_VARS },
  light: { ...LIGHT_GLOBAL_VARS },
  dark: { ...DARK_GLOBAL_VARS },
}

const globalStyledMap: Record<string, GlobalStyledItem> = {}

/**
 * 设置全局css变量
 *
 * @param themeMode
 * @param vars
 */
export function setGlobalCssVars(themeMode: ThemeMode, vars: GlobalCssVars) {
  Object.assign(globalCssVars[themeMode], vars)
}

/**
 * 设置全局样式
 *
 * @param styled
 * @param scoped 是否以 `styled.name` 作为私有域
 */
export function setGlobalStyles(styled: SerializedStyles, scoped?: boolean) {
  globalStyledMap[styled.name] = { scoped, styled }
}

/**
 * 获取全局样式
 *
 * @returns
 */
export function getGlobalStyled() {
  let globalStyled: string = ''

  for (const key in globalStyledMap) {
    const val = globalStyledMap[key]
    if (val.scoped) {
      globalStyled += `.${key}{${val.styled.styles}}`
    } else {
      globalStyled += val.styled.styles
    }
  }

  return css`
    :root {
      ${mapInlineCssVarsToString(globalCssVars.common as CssVars, TAOMU_PREFIX)}
    }

    :root[data-theme='light'] {
      ${mapInlineCssVarsToString(globalCssVars.light as CssVars, TAOMU_PREFIX)}
    }

    :root[data-theme='dark'] {
      ${mapInlineCssVarsToString(globalCssVars.dark as CssVars, TAOMU_PREFIX)}
    }

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

      --base-scrollbar-size: 6px;
      --base-scrollbar-thumb-bg: ${mixinRgba('colorFrontRgb', 0.2)};
      --base-scrollbar-track-bg: ${mixinRgba('colorFrontRgb', 0.05)};
      --base-scrollbar-thumb-hover-bg: ${mixinRgba('colorFrontRgb', 0.3)};

      background-color: ${linkCssVar('colorBackground')};
      color: ${linkCssVar('colorTextDefault')};
      font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
      font-size: ${linkCssVar('fontSize')};
      text-rendering: optimizeLegibility;
    }

    .mini-scrollbar {
      &::-webkit-scrollbar {
        height: var(--base-scrollbar-size);
        width: var(--base-scrollbar-size);
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        border: 1px solid var(--base-scrollbar-track-bg);
        background-color: var(--base-scrollbar-thumb-bg);
      }

      &::-webkit-scrollbar-track {
        // border-radius: 10px;
        background-color: var(--base-scrollbar-track-bg);
      }

      &::-webkit-scrollbar-thumb:hover {
        background-color: var(--base-scrollbar-thumb-hover-bg);
      }
    }

    ${globalStyled}
  `
}
