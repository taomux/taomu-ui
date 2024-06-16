import React from 'react'

import { popupStore } from './popup.store'

export const PopupService: React.FC = () => {
  const { popupsMap, updateCount } = popupStore.useStore(['popupsMap', 'updateCount'])

  console.count('count')

  const popups = React.useMemo(() => {
    console.log('popupsMap', popupsMap)

    const nodes: React.ReactElement[] = []

    for (const [key, [popupPortal, contentProps]] of popupsMap) {
      console.log({ key, popupPortal, contentProps })
      nodes.push(popupPortal.render(contentProps))
      // nodes.push(createPortal(popupPortal.render(contentProps), popupPortal.container, popupPortal.popupId))
    }

    return nodes
  }, [popupsMap, updateCount])

  return <>{popups}</>
}
