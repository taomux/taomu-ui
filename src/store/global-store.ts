import { Store } from 'taomu-store'

export interface GlobalStoreState {
  /** 主题颜色，亮色 | 暗色 | 跟随系统 */
  theme: 'light' | 'dark' | 'system'
}

export const globalStore = new Store<GlobalStoreState>(
  {
    theme: (localStorage.getItem('taomu-theme') as GlobalStoreState['theme']) || 'system',
  },
  {
    theme(theme) {
      localStorage.setItem('taomu-theme', theme)
      return { theme }
    },
  }
)
