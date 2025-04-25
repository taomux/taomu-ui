import { type SerializedStyles } from '@emotion/react'

import { dispatchCustomEvent } from '../hooks'
import { defaultStyled } from './default.style'

const globalStyledMap: Record<string, SerializedStyles> = {}

/**
 * 初始化全局样式
 * 注意不会实时更新
 *
 * @param styled
 */
export function initGlobalStyles(styled: SerializedStyles) {
  globalStyledMap[styled.name] = styled
}

/**
 * 设置全局样式
 *
 * @param styled
 */
export function setGlobalStyles(styled: SerializedStyles) {
  if (Object.prototype.hasOwnProperty.call(globalStyledMap, styled.name)) {
    return // 正常情况下 SerializedStyles 生成的名称是唯一的，若已存在则不需要重复更新
  }

  globalStyledMap[styled.name] = styled
  dispatchCustomEvent('taomu://update-global-style')
}

/**
 * 获取全局样式
 *
 * @returns
 */
export function getGlobalStyled() {
  const globalStyles = [defaultStyled]

  for (const key in globalStyledMap) {
    globalStyles.push(globalStyledMap[key])
  }

  return globalStyles
}
