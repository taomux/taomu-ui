import React from 'react'
import { PopupPortalBaseOptions } from '../popup'
import { DialogPortal, DialogPortalOptions, DialogComponentProps } from './dialog.portal'

export interface DialogHookOptions extends DialogPortalOptions {
  /** 当组件销毁时自动销毁, 默认 true */
  destroyOnUnmount?: boolean
}

export function useDialog<T extends DialogComponentProps, R = any>(
  content: React.ComponentType<T>,
  { destroyOnUnmount = true, ...options }: DialogHookOptions = {},
  baseOptions?: PopupPortalBaseOptions
) {
  const dialogInsRef = React.useRef(new DialogPortal<T, R>(content, options, baseOptions))

  React.useEffect(() => {
    return () => {
      if (destroyOnUnmount) dialogInsRef.current.destroy()
    }
  }, [])

  return dialogInsRef.current
}
