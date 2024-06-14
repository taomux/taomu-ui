import { create } from 'zustand'

export interface GlobalStoreState {
  /** 主题颜色，亮色 | 暗色 | 跟随系统 */
  theme: 'light' | 'dark' | 'system'
}

export const useGlobalStore = create<GlobalStoreState>((set) => {
  return {
    theme: (localStorage.getItem('taomu-theme') as GlobalStoreState['theme']) || 'system',

    updateTheme: (theme: GlobalStoreState['theme']) => {
      localStorage.setItem('taomu-theme', theme)
      return set({ theme })
    },
  }
})
