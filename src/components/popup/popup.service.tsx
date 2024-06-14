import React from 'react'

import { usePopupStore } from './popup.store'

export const PopupService: React.FC = () => {
  const { popupsMap, openedPopupsList } = usePopupStore()

  console.count('count')

  React.useEffect(() => {
    console.log('openedPopupsList', openedPopupsList)
  }, [openedPopupsList])

  React.useEffect(() => {
    console.log('popupsMap', popupsMap)
  }, [popupsMap])

  return <>{openedPopupsList}</>
}
