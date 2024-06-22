import React from 'react'
import { PopupPortal, PopupPortalOptions } from '../popup'
import { Dialog, DialogProps } from './dialog'

export interface DialogPortalOptions extends DialogProps {
  popupOptions?: PopupPortalOptions
}

export class DialogPortal<ContentProps extends object = any> extends PopupPortal<ContentProps> {
  Content: React.ComponentType<ContentProps> = () => null

  constructor(
    /** 内容组件 */
    DialogContent: React.ComponentType<ContentProps>,
    /** 选项 */
    public dialogOptions: DialogPortalOptions = {}
  ) {
    const { popupOptions = {}, ...dialogProps } = dialogOptions

    const Content: React.ComponentType<ContentProps> = (contentProps) => {
      return (
        <Dialog {...dialogProps}>
          <DialogContent {...contentProps} />
        </Dialog>
      )
    }

    super(Content, Object.assign(getDefaultDialogPopupOptions(), popupOptions))

    this.Content = Content
  }
}

function getDefaultDialogPopupOptions(): PopupPortalOptions {
  return {
    positionType: 'dialog-center',
    contentAnimationType: 'dialogZoomOut',
    // overlay: true,
    // clickToClose:false,
    lockScroll: true,
  }
}
