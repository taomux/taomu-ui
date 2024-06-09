import { mapInlineCssVars, getCssVarPrefixWithGroups } from 'taomu-toolkit'

import { TAOMU_PREFIX, RgbColorKeys } from './defines'

/**
 * 链接到 css 变量，返回真实变量名
 *
 * @param name
 * @param hasVar 是否包裹 `var(...)`
 * @returns
 */
export function linkCssVar(name: GlobalCssVarsNames, hasVar: boolean = true) {
  const varName = `${getCssVarPrefixWithGroups(TAOMU_PREFIX)}${name}`
  if (hasVar) {
    return `var(${varName})`
  }
  return varName
}

/**
 * 返回一个 css 变量声明字符串
 *
 * @param name
 * @param value
 */
export function parseCssVarDeclareStr(name: GlobalCssVarsNames, value: string) {
  return `${linkCssVar(name, false)}: ${value};`
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
 * 映射行内 css 变量
 *
 * @param vars
 * @returns
 */
export function mapTaomuInlineCssVars<T extends GlobalCssVars>(vars?: T) {
  return mapInlineCssVars(vars, TAOMU_PREFIX)
}
