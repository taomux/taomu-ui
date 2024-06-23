import { Store } from 'taomu-store'

// import { create } from 'zustand'

import type { PopupPortalBase } from './popup.portal.base'

export interface PopupStoreState {
  /** 当前打开的弹层 */
  popupsMap: Map<string, [PopupPortalBase, object | undefined]>
  /** 用于强制更新 */
  updateCount: number
}

export const popupStore = new Store<PopupStoreState>({
  updateCount: 0,
  popupsMap: new Map(),
})
