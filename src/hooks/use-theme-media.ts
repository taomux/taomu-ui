import React from 'react'

import { taomuStore } from '../store'
import { ThemeType } from '../utils/theme'
import { ServerConfig } from '../components/taomu-app'

/**
 * 获取并监听当前系统主题
 */
export function useThemeMedia(serverConfig?: ServerConfig) {
  const { theme: themeConfig, systemTheme } = taomuStore.useStore(['theme', 'systemTheme'])
  const [theme, setTheme] = React.useState<ThemeType>(systemTheme || 'dark')

  React.useEffect(() => {
    let nextTheme: ThemeType
    if (themeConfig === 'system') {
      nextTheme = systemTheme || 'dark'
    } else {
      nextTheme = themeConfig
    }
    setTheme(nextTheme)
    serverConfig?.onThemeChange?.(nextTheme)
    localStorage.setItem('taomu-theme', theme)
  }, [themeConfig, systemTheme])

  return { theme }
}
