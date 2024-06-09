import React from 'react'
import { addons, types } from '@storybook/manager-api'
import { IconButton, Loader } from '@storybook/components'
import { LightningIcon, SunIcon, MoonIcon } from '@storybook/icons' // https://main--64b56e737c0aeefed9d5e675.chromatic.com/?path=/docs/introduction--docs

import { globalStore } from '../../src/store'

const ADDON_ID = 'storybook/my-addon'
const TOOL_ID = `${ADDON_ID}/tool`
// const PANEL_ID = `${ADDON_ID}/panel`
// const TAB_ID = `${ADDON_ID}/tab`
// const PARAM_KEY = `myAddonParameter`

export const SwitchThemeButton: React.FC = () => {
  const { theme } = globalStore.useStore(['theme'])

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const toggleMyTool = React.useCallback(() => {
    const iframe = document.querySelector<HTMLIFrameElement>('#storybook-preview-iframe')

    if (!iframe?.contentWindow?.document) return

    iframe.contentWindow.document.documentElement.dataset.theme = theme

    const nextTheme = theme === 'light' ? 'dark' : 'light'
    globalStore.dispatch({ theme: nextTheme })
  }, [theme])

  // React.useEffect(() => {
  //   api.setAddonShortcut(ADDON_ID, {
  //     label: '切换主题 (⌘ + /)',
  //     defaultShortcut: ['ctrl', '/'],
  //     actionName: 'myaddon',
  //     // actionName: ADDON_ID,
  //     showInMenu: true,
  //     action: toggleMyTool,
  //   })
  // }, [toggleMyTool, api])

  function renderIcon() {
    switch (theme) {
      case 'light':
        return <SunIcon />

      case 'dark':
        return <MoonIcon />

      default:
        return <LightningIcon />
    }
  }

  return (
    <IconButton key={TOOL_ID} title="切换主题" onClick={toggleMyTool}>
      {renderIcon()}
      <Loader />
    </IconButton>
  )
}

export function registerSwitchThemeButton() {
  addons.register(ADDON_ID, () => {
    addons.add(TOOL_ID, {
      type: types.TOOLEXTRA,
      title: '切换主题',
      // match: ({ tabId, viewMode }) => {
      //   return true
      //   console.log(viewMode)
      //   return !tabId && viewMode === 'story'
      // },
      render: SwitchThemeButton,
    })
  })
}
