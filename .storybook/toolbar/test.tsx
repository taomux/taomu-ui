import React from 'react'
// import { useGlobals, useAddonState } from '@storybook/addon-controls'
import { addons, types } from '@storybook/manager-api'
import { IconButton } from '@storybook/components'
import { DeleteIcon } from '@storybook/icons'

const ADDON_ID = 'my-addon'
const TOOL_ID = `${ADDON_ID}/toolbar`

export const ToolbarButton: React.FC = () => {
  // const [{ myAddon }] = useGlobals()
  // const [addonState, setAddonState] = useAddonState('my-addon/state', {})

  // const toggle = React.useCallback(() => {
  //   setAddonState({ ...addonState, active: !addonState.active })
  // }, [addonState, setAddonState])

  function handleClick() {
    alert('hello world')
  }

  return (
    <IconButton key={TOOL_ID} title="Toggle my addon" onClick={handleClick}>
      123123213
      <DeleteIcon />
    </IconButton>
  )
}

addons.register(ADDON_ID, () => {
  addons.add(TOOL_ID, {
    type: types.TOOLEXTRA,
    title: 'My Addon 123123',
    match: ({ viewMode }) => viewMode === 'story' || viewMode === 'docs',
    // match: ({ viewMode }) => true,
    render: ToolbarButton,
  })
})
