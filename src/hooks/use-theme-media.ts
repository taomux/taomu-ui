import React from 'react'

import { taomuStore } from '../store'

/**
 * 获取并监听当前系统主题
 */
export function useThemeMedia() {
  const { theme: themeConfig, systemTheme } = taomuStore.useStore(['theme', 'systemTheme'])
  const [theme, setTheme] = React.useState<'light' | 'dark'>(systemTheme || 'dark')

  React.useEffect(() => {
    if (themeConfig === 'system') {
      setTheme(systemTheme || 'dark')
    } else {
      setTheme(themeConfig)
    }
  }, [themeConfig, systemTheme])

  return { theme }
}
