import { css, type SerializedStyles } from '@emotion/react'
import { mapInlineCssVarsToString } from 'taomu-toolkit'

import { dispatchCustomEvent } from '../hooks'
import { ThemeMode, CssVars, GlobalStyledItem, TAOMU_PREFIX } from './defines'
import { COMMON_GLOBAL_VARS, LIGHT_GLOBAL_VARS, DARK_GLOBAL_VARS } from './themes'
import { linkCssVar } from './utils'

const globalCssVars: Record<ThemeMode, GlobalCssVars> = {
  common: { ...COMMON_GLOBAL_VARS },
  light: { ...LIGHT_GLOBAL_VARS },
  dark: { ...DARK_GLOBAL_VARS },
}

const globalStyledMap: Record<string, GlobalStyledItem> = {}

/**
 * 初始化全局css变量
 * 注意不会实时更新
 *
 * @param themeMode
 * @param vars
 */
export function initGlobalCssVars(themeMode: ThemeMode, vars: GlobalCssVars) {
  Object.assign(globalCssVars[themeMode], vars)
}

/**
 * 设置全局css变量
 *
 * 高运行时开销，不可频繁调用，建议使用 `initGlobalCssVars`
 *
 * @param themeMode
 * @param vars
 */
export function setGlobalCssVars(themeMode: ThemeMode, vars: GlobalCssVars) {
  Object.assign(globalCssVars[themeMode], vars)
  dispatchCustomEvent('taomu://update-global-style')
}

/**
 * 初始化全局样式
 * 注意不会实时更新
 *
 * @param styled
 * @param scoped 是否以 `styled.name` 作为私有域
 */
export function initGlobalStyles(styled: SerializedStyles, scoped?: boolean) {
  globalStyledMap[styled.name] = { scoped, styled }
}

/**
 * 设置全局样式
 *
 * @param styled
 * @param scoped 是否以 `styled.name` 作为私有域
 */
export function setGlobalStyles(styled: SerializedStyles, scoped?: boolean) {
  if (Object.prototype.hasOwnProperty.call(globalStyledMap, styled.name)) {
    return // 正常情况下 SerializedStyles 生成的名称是唯一的，若已存在则不需要重复更新
  }

  globalStyledMap[styled.name] = { scoped, styled }
  dispatchCustomEvent('taomu://update-global-style')
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

      background: ${linkCssVar('colorBackgroundRoot')};
      color: ${linkCssVar('colorTextDefault')};
      font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
      font-size: ${linkCssVar('fontSize')};
      text-rendering: optimizeLegibility;
    }

    ${globalStyled}
  `
}
