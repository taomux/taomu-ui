import React from 'react'

import { globalStore } from '../store'

/**
 * Hook to get the current theme from the user's OS
 *
 * @returns
 */
export function useThemeMedia() {
  const { theme: themeConfig } = globalStore.useStore(['theme'])
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light')

  React.useEffect(() => {
    let mediaQuery: MediaQueryList | null = null
    let handleChange = () => {}

    if (themeConfig === 'system') {
      mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      handleChange = () => {
        setTheme(mediaQuery?.matches ? 'dark' : 'light')
      }
      handleChange() // 手动初始化
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

  return { theme }
}
