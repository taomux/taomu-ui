import { css, type SerializedStyles } from '@emotion/react'
import { mapInlineCssVarsToString, mapInlineCssVars, getCssVarPrefixWithGroups } from 'taomu-toolkit'

import { ThemeMode, RgbColorKeys, CssVars, GlobalStyledItem, TAOMU_PREFIX } from './defines'
import { COMMON_GLOBAL_VARS, LIGHT_GLOBAL_VARS, DARK_GLOBAL_VARS } from './themes'

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
 * 映射行内 css 变量
 *
 * @param vars
 * @returns
 */
export function mapTaomuInlineCssVars<T extends GlobalCssVars>(vars?: T) {
  return mapInlineCssVars(vars, TAOMU_PREFIX)
}

/**
 * 链接到 css 变量，返回 `var(--xxx-xxx)`
 *
 * @param name
 * @returns
 */
export function linkCssVar(name: GlobalCssVarsNames) {
  return `var(${getCssVarPrefixWithGroups(TAOMU_PREFIX)}${name})`
}

/**
 * 混合 Rgba
 *
 * @param name
 * @param opacity
 * @returns
 */
export function mixinRgba(name: RgbColorKeys, opacity: number) {
  return `rgba(${linkCssVar(name)}, ${opacity})`
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

      background-color: ${linkCssVar('colorBackground')};
      color: ${linkCssVar('colorTextDefault')};
      font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
      font-size: ${linkCssVar('fontSize')};
      text-rendering: optimizeLegibility;
    }

    ${globalStyled}
  `
}
