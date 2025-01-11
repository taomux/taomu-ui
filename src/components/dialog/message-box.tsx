import { renderTypeIcon, type MessageIconType } from '../../utils'
import { DialogPortal, DialogPortalOptions } from './dialog.portal'

export interface MessageBoxOptions extends DialogPortalOptions {
  type?: MessageIconType
  title?: DialogPortalOptions['title']
  icon?: React.ReactNode
  autoOpen?: boolean
}

export function open(message: string, { type, title = ' ', icon, autoOpen = true, ...dialogOptions }: MessageBoxOptions = {}) {
  const ins = new DialogPortal(
    () => {
      const iconNode = icon || renderTypeIcon(type)

      return (
        <div className="pt-8 px-24 flex gap-12 center-v">
          {iconNode ? <div>{iconNode}</div> : null}
          <div>{message}</div>
        </div>
      )
    },
    {
      title,
      splitBorder: false,
      showCancelButton: false,
      noContentWrapper: true,
      ...dialogOptions,
    }
  )

  if (autoOpen) {
    ins.open()
  }

  return ins
}

export function info(message: string, options?: Omit<MessageBoxOptions, 'type'>) {
  return open(message, { type: 'info', ...options })
}

export function warning(message: string, options?: Omit<MessageBoxOptions, 'type'>) {
  return open(message, { type: 'warning', ...options })
}

export function success(message: string, options?: Omit<MessageBoxOptions, 'type'>) {
  return open(message, { type: 'success', ...options })
}

export function error(message: string, options?: Omit<MessageBoxOptions, 'type'>) {
  return open(message, { type: 'error', ...options })
}

export function confirm(
  message?: string,
  { type = 'question', title = ' ', icon, autoOpen = true, ...dialogOptions }: MessageBoxOptions = {}
) {
  const ins = new DialogPortal(
    () => {
      const iconNode = icon || renderTypeIcon(type)

      return (
        <div className="pt-8 px-24 flex gap-12 center-v">
          {iconNode ? <div>{iconNode}</div> : null}
          <div>{message}</div>
        </div>
      )
    },
    {
      title,
      splitBorder: false,
      noContentWrapper: true,
      ...dialogOptions,
    }
  )

  if (autoOpen) {
    ins.open()
  }

  return ins
}
