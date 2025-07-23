// import { taomuStore } from '../store'

export type ThemeType = 'light' | 'dark'

export type ThemeConfigType = ThemeType | 'system'

/** 初始主题色常量 */
export let systemTheme: ThemeType = 'dark'

// 服务端模式下不支持获取系统主题色
// if (typeof window !== 'undefined') {
//   const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

//   mediaQuery.addEventListener('change', () => {
//     systemTheme = mediaQuery?.matches ? 'dark' : 'light'
//     taomuStore.setState({ systemTheme })
//   })
// }

export function getDefaultTheme() {
  if (typeof localStorage !== 'undefined') {
    return (localStorage.getItem('taomu-theme') as ThemeConfigType) || 'system'
  }

  return systemTheme
}
