import React from 'react'

import { useGlobalStore } from '../store'

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

/** 初始主题色常量 */
const INITIAL_THEME = mediaQuery?.matches ? 'dark' : 'light'

/**
 * 获取并监听当前系统主题
 */
export function useThemeMedia() {
  const { themeConfig } = useGlobalStore((state) => ({ themeConfig: state.theme }))
  const [theme, setTheme] = React.useState<'light' | 'dark'>(INITIAL_THEME)

  React.useEffect(() => {
    if (themeConfig === 'system') {
      if (!mediaQuery) return
      mediaQuery.addEventListener('change', handleChange)
    } else {
      setTheme(themeConfig)
    }

    return () => {
      if (mediaQuery) {
        mediaQuery.removeEventListener('change', handleChange)
      }
    }
  }, [themeConfig])

  function handleChange() {
    setTheme(mediaQuery?.matches ? 'dark' : 'light')
  }

  return { theme }
}
