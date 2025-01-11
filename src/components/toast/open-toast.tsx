import { PopupPortal } from '../popup'
import { Toast, ToastProps } from './toast'

import { setGlobalStyles } from '../../styles'
import { toastContainerStyled } from './toast.styled'

export interface OpenToastOptions extends ToastProps {
  duration?: number
}

export function openToast({ duration = 3000, ...toastProps }: OpenToastOptions) {
  setGlobalStyles(toastContainerStyled, true)

  const ins = new PopupPortal(
    () => {
      return <Toast {...toastProps} />
    },
    {
      createContainerClass: toastContainerStyled.name,
      // contentWrapperProps: { css: toastContainerStyled },
      noFixed: true,
      backgroundEvent: true,
      overlay: false,
      clickToClose: false,
    }
  )

  ins.open()

  setTimeout(() => {
    ins.close()
  }, duration)

  return ins
}

// const CONTAINER_ID = 'taomu-toast-container'

// function getToastContainer() {
//   const container = document.createElement('div')
//   container.id = CONTAINER_ID
//   document.body.appendChild(container)
//   return container
// }
