import { Store } from 'taomu-store'

// import { create } from 'zustand'

import type { PopupPortal } from './popup.portal'

export interface PopupStoreState {
  /** 当前打开的弹层 */
  popupsMap: Map<string, [PopupPortal, object | undefined]>
  /** 用于强制更新 */
  updateCount: number
}

export const popupStore = new Store<PopupStoreState>({
  updateCount: 0,
  popupsMap: new Map(),
})
