import { Store } from 'taomu-store'

import { getDefaultTheme, ThemeType, ThemeConfigType, systemTheme } from '../utils/theme'

export interface TaomuStoreState {
  /** 主题颜色，亮色 | 暗色 | 跟随系统 */
  theme: ThemeConfigType
  /** 系统主题色 */
  systemTheme?: ThemeType
}

function getDefaultState(): TaomuStoreState {
  // if (typeof window !== 'undefined' && window.__TAOMU_STORE_DEFAULT_STATE__) {
  //   return window.__TAOMU_STORE_DEFAULT_STATE__
  // }

  return {
    systemTheme,
    theme: getDefaultTheme(),
  }
}

export const taomuStore = new Store<TaomuStoreState>(getDefaultState())

declare global {
  interface Window {
    __TAOMU_STORE_DEFAULT_STATE__: TaomuStoreState
  }
}
