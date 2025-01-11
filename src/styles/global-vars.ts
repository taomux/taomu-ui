import { css } from '@emotion/react'
import { mapInlineCssVarsToString } from 'taomu-toolkit'

import { dispatchCustomEvent } from '../hooks'
import { ThemeMode, CssVars, TAOMU_PREFIX } from './defines'
import { COMMON_GLOBAL_VARS, LIGHT_GLOBAL_VARS, DARK_GLOBAL_VARS } from './themes'

export const globalCssVars: Record<ThemeMode, GlobalCssVars> = {
  common: { ...COMMON_GLOBAL_VARS },
  light: { ...LIGHT_GLOBAL_VARS },
  dark: { ...DARK_GLOBAL_VARS },
}

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

export function getGlobalCssVars() {
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
  `
}
