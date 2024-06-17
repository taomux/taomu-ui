import React from 'react'

import { popupStore } from './popup.store'

export const PopupService: React.FC = () => {
  const { popupsMap, updateCount } = popupStore.useStore(['popupsMap', 'updateCount'])

  const popups = React.useMemo(() => {
    const nodes: React.ReactElement[] = []

    for (const [key, [popupPortal, contentProps]] of popupsMap) {
      console.log({ key, popupPortal, contentProps }, popupsMap)
      nodes.push(popupPortal.render(contentProps))
    }

    return nodes
  }, [popupsMap, updateCount])

  return <>{popups}</>
}
