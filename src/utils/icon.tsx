import { IconAlertCircle, IconAlertTriangle, IconCheckCircle, IconXCircle, IconHelpCircle } from '../components/icons'
import { linkCssVar } from '../styles'

export type MessageIconType = 'info' | 'warning' | 'success' | 'error' | 'question' | 'loading'

export function renderTypeIcon(type?: MessageIconType, size = 36) {
  switch (type) {
    case 'info':
      return <IconAlertCircle size={size} color={linkCssVar('colorInfo')} />
    case 'warning':
      return <IconAlertTriangle size={size} color={linkCssVar('colorWarning')} />
    case 'success':
      return <IconCheckCircle size={size} color={linkCssVar('colorSuccess')} />
    case 'error':
      return <IconXCircle size={size} color={linkCssVar('colorError')} />
    case 'question':
      return <IconHelpCircle size={size} color={linkCssVar('colorWarning')} />
    default:
      return null
  }
}
