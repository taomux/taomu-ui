import { Store } from 'taomu-store'

export interface TaomuStoreState {
  /** 主题颜色，亮色 | 暗色 | 跟随系统 */
  theme: 'light' | 'dark' | 'system'
}

export const taomuStore = new Store<TaomuStoreState>(
  {
    theme: (localStorage.getItem('taomu-theme') as TaomuStoreState['theme']) || 'system',
  },
  {
    theme(theme) {
      localStorage.setItem('taomu-theme', theme)
      return { theme }
    },
  }
)
