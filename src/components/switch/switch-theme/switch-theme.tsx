import React from 'react'

import { linkCssVar, mixinRgba } from '../../../styles'
import { useTaomuClassName } from '../../../hooks'
import { Switch, SwitchProps } from '../switch'
import { IconSun, IconMoon } from '../../icons'
import { taomuStore } from '../../../store'

export interface SwitchThemeProps extends SwitchProps {}

export const SwitchTheme: React.FC<SwitchThemeProps> = ({ className, cssVars, style, ...wrapProps }) => {
  const switchThemeClassNames = useTaomuClassName('switch-theme', className)
  const { theme, systemTheme } = taomuStore.useStore(['theme', 'systemTheme'])

  const isDark = React.useMemo(() => {
    let isDark = false

    if (theme === 'system') {
      isDark = systemTheme === 'dark'
    } else {
      isDark = theme === 'dark'
    }

    return isDark
  }, [theme, systemTheme])

  const thumbContent = React.useMemo(() => {
    if (isDark) {
      return <IconMoon size={18} className="ml-2 color-gray" />
    } else {
      return <IconSun size={17} className="mr-2 color-gray" />
    }
  }, [isDark])

  function onChange(_e: React.ChangeEvent<HTMLInputElement>, value: boolean) {
    taomuStore.setState({ theme: value ? 'light' : 'dark' })
  }

  return (
    <Switch
      className={switchThemeClassNames}
      radius={20}
      width={46}
      height={23}
      noThumbStyle
      thumbContent={thumbContent}
      onChange={onChange}
      value={!isDark}
      cssVars={{
        switchBoxBgActive: mixinRgba('colorFrontRgb', 0.03),
        switchBorderColor: !isDark ? linkCssVar('colorBorderSplit') : undefined,
        ...cssVars,
      }}
      {...wrapProps}
    />
  )
}
