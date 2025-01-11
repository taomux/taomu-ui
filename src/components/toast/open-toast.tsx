import { PopupPortal, closePopupById } from '../popup'
import { Toast, ToastProps } from './toast'

import { setGlobalStyles } from '../../styles'
import { toastContainerStyled } from './toast.styled'

export interface ToastOptions extends ToastProps {
  /** 持续时间 默认 2500 */
  duration?: number
  /** 鼠标悬浮时不关闭 默认 true */
  hoverNotClose?: boolean
  /** toast id (需要单例时管用) */
  popupId?: string
  /** 按下 esc 关闭, 默认 false */
  escToClose?: boolean
}

const toastIds = new Set<string>()

export function openToast({ duration = 2500, popupId, hoverNotClose = true, escToClose = false, ...toastProps }: ToastOptions) {
  setGlobalStyles(toastContainerStyled)

  let closeTM: number | void

  const ins = new PopupPortal(
    (props) => {
      return <Toast {...props} {...toastProps} />
    },
    {
      popupId,
      createContainerClass: 'taomu-toast-container',
      noFixed: true,
      overlay: false,
      clickToClose: false,
      backgroundEvent: true,
      escToClose,
      onClose: () => {
        toastIds.delete(ins.popupId)
      },
      onMouseEnter: () => {
        if (!hoverNotClose) return
        if (closeTM) {
          clearTimeout(closeTM)
          closeTM = undefined
        }
      },
      onMouseLeave: () => {
        if (!hoverNotClose) return
        delayClose()
      },
    }
  )

  ins.open()
  toastIds.add(ins.popupId)

  function delayClose() {
    if (duration <= 0) return
    closeTM = setTimeout(() => {
      ins.close()
    }, duration)
  }

  delayClose()

  return ins
}

export function closeAll() {
  for (const popupId of toastIds) {
    closePopupById(popupId)
  }
}

export function info(message?: string, options?: ToastOptions) {
  return openToast({ type: 'info', message, ...options })
}

export function success(message?: string, options?: ToastOptions) {
  return openToast({ type: 'success', message, ...options })
}

export function warning(message?: string, options?: ToastOptions) {
  return openToast({ type: 'warning', message, ...options })
}

export function error(message?: string, options?: ToastOptions) {
  return openToast({ type: 'error', message, ...options })
}

export function question(message?: string, options?: ToastOptions) {
  return openToast({ type: 'question', message, ...options })
}

export function loading(message: string = 'Loading...', options?: ToastOptions) {
  return openToast({ type: 'loading', duration: 0, popupId: 'toast-loading', message, ...options })
}
