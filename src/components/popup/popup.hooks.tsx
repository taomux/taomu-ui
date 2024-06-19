import React from 'react'
import { PopupPortal, PopupPortalOptions } from './popup.portal'

export interface PopupHookOptions extends PopupPortalOptions {
  /** 当组件销毁时自动销毁, 默认 true */
  destroyOnUnmount?: boolean
}

export type UsePopupArgs<T extends object = any> = ConstructorParameters<typeof PopupPortal<T>>

export function usePopup<T extends object = any>(
  content: React.ComponentType<T>,
  { destroyOnUnmount = true, ...options }: PopupHookOptions = {}
) {
  const popupRef = React.useRef<PopupPortal<T>>(new PopupPortal<T>(content, options))

  React.useEffect(() => {
    return () => {
      if (destroyOnUnmount) popupRef.current.destroy()
    }
  }, [])

  return popupRef.current
}
