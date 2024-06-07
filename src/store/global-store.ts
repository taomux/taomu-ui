import { Store } from 'taomu-store'

export interface GlobalStoreState {
  /** 主题颜色，亮色 | 暗色 | 跟随系统 */
  theme: 'light' | 'dark' | 'system'
}

export const globalStore = new Store<GlobalStoreState>({
  theme: 'system',
})

export const useGlobalStore = globalStore.useStore.bind(globalStore)

export const dispatchGlobalStore = globalStore.dispatch.bind(globalStore)
