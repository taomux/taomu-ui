import { Store } from 'taomu-store'

export interface TaomuStoreState {
  /** 主题颜色，亮色 | 暗色 | 跟随系统 */
  theme: 'light' | 'dark' | 'system'
  /** 系统主题色 */
  systemTheme?: 'light' | 'dark'
}

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

mediaQuery.addEventListener('change', () => {
  const systemTheme = mediaQuery?.matches ? 'dark' : 'light'
  taomuStore.setState({ systemTheme })
})

/** 初始主题色常量 */
const systemTheme = mediaQuery?.matches ? 'dark' : 'light'

const defaultTheme = (localStorage.getItem('taomu-theme') as TaomuStoreState['theme']) || 'system'

export const taomuStore = new Store<TaomuStoreState>(
  {
    systemTheme,
    theme: defaultTheme,
  },
  {
    theme(theme) {
      localStorage.setItem('taomu-theme', theme)
      return { theme }
    },
  }
)
