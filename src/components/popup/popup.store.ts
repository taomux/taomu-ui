import { create } from 'zustand'

import type { PopupPortal } from './popup.portal'

export interface PopupStoreState {
  popupsMap: Map<string, PopupPortal>
  openedPopupsList: Set<string>
}

export const usePopupStore = create<PopupStoreState>(() => ({
  popupsMap: new Map(),
  openedPopupsList: new Set(),
}))
