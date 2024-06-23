import React from 'react'
import { DialogPortal, DialogPortalOptions, DialogComponentProps } from './dialog.portal'

export interface DialogHookOptions extends DialogPortalOptions {
  /** 当组件销毁时自动销毁, 默认 true */
  destroyOnUnmount?: boolean
}

export function useDialog<T extends DialogComponentProps>(
  content: React.ComponentType<T>,
  { destroyOnUnmount = true, ...options }: DialogHookOptions = {}
) {
  const dialogInsRef = React.useRef<DialogPortal<T>>(new DialogPortal<T>(content, options))

  React.useEffect(() => {
    return () => {
      if (destroyOnUnmount) dialogInsRef.current.destroy()
    }
  }, [])

  return dialogInsRef.current
}
