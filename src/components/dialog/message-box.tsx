import { IconAlertCircle, IconAlertTriangle, IconCheckCircle, IconXCircle, IconHelpCircle } from '../icons'
import { linkCssVar } from '../../styles'
import { DialogPortal, DialogPortalOptions } from './dialog.portal'

export type MessageBoxType = 'info' | 'warning' | 'success' | 'error' | 'question'

export interface MessageBoxOptions extends DialogPortalOptions {
  type?: MessageBoxType
  title?: DialogPortalOptions['title']
  icon?: React.ReactNode
  autoOpen?: boolean
}

function renderTypeIcon(type?: MessageBoxType) {
  switch (type) {
    case 'info':
      return <IconAlertCircle size={36} color={linkCssVar('colorInfo')} />
    case 'warning':
      return <IconAlertTriangle size={36} color={linkCssVar('colorWarning')} />
    case 'success':
      return <IconCheckCircle size={36} color={linkCssVar('colorSuccess')} />
    case 'error':
      return <IconXCircle size={36} color={linkCssVar('colorError')} />
    case 'question':
      return <IconHelpCircle size={36} color={linkCssVar('colorWarning')} />
    default:
      return null
  }
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
