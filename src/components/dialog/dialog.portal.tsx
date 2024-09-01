import React from 'react'
import { PopupPortalBase, PopupPortalBaseOptions } from '../popup'
import { Dialog, DialogProps } from './dialog'

export interface DialogPortalOptions extends DialogProps {}

export interface DialogComponentProps {
  /** dialogPortal 实例 */
  dialogPortalInstance: DialogPortal
  /** 用于在内容组件中定义 onOk，注意这会覆盖 options 中的 onOk */
  defineOnOk: (fn: DialogProps['onOk']) => void
  /** 用于在内容组件中定义 onCancel，注意这会覆盖 options 中的 onCancel */
  defineOnCancel: (fn: DialogProps['onCancel']) => void
}

interface AsyncCallbackRef {
  onOk?: DialogProps['onOk']
  onCancel?: DialogProps['onCancel']
}

export class DialogPortal<
  ContentProps extends DialogComponentProps = DialogComponentProps,
  OpenResult = any,
> extends PopupPortalBase<ContentProps, DialogPortalOptions> {
  Content: React.ComponentType<ContentProps> = () => null
  public asyncCallbackRef: React.MutableRefObject<AsyncCallbackRef | null> = React.createRef()

  constructor(
    /** 内容组件 */
    public DialogContent: React.ComponentType<ContentProps>,
    /** dialog 配置项 */
    public dialogOptions: DialogPortalOptions = {},
    /** popup 配置项 */
    public baseOptions: PopupPortalBaseOptions = {}
  ) {
    const { onBeforeLeave, ...restBaseOptions } = baseOptions

    baseOptions = Object.assign(getDefaultDialogPopupOptions(), restBaseOptions, {
      onBeforeLeave: (el) => {
        this.dialogOptions?.onClose?.()
        onBeforeLeave?.(el)
      },
    } satisfies PopupPortalBaseOptions)

    super((contentProps) => {
      const Content = this.#DialogContent
      return <Content {...(contentProps as any)} />
    }, baseOptions)

    this.Content = this.#DialogContent
  }

  #DialogContent: React.ComponentType<ContentProps> = (contentProps: ContentProps) => {
    const DialogContent = this.DialogContent

    return (
      <Dialog {...this.dialogOptions} onClose={this.close} dialogPortalInstance={this as unknown as DialogPortal}>
        <DialogContent
          {...(contentProps as any)}
          dialogPortalInstance={this}
          defineOnOk={this.defineOnOk}
          defineOnCancel={this.defineOnCancel}
        />
      </Dialog>
    )
  }

  private defineOnOk = (fn: DialogProps['onOk']) => {
    if (!this.asyncCallbackRef.current) {
      this.asyncCallbackRef.current = {}
    }
    this.asyncCallbackRef.current.onOk = fn
  }

  private defineOnCancel = (fn: DialogProps['onCancel']) => {
    if (!this.asyncCallbackRef.current) {
      this.asyncCallbackRef.current = {}
    }
    this.asyncCallbackRef.current.onCancel = fn
  }

  public open = (
    contentProps?: ContentProps,
    dialogOptions: DialogPortalOptions = {},
    baseOptions: PopupPortalBaseOptions = {}
  ) => {
    return new Promise<OpenResult>((resolve, reject) => {
      const nextOptions = { ...dialogOptions }

      const asyncCallback = dialogOptions.asyncCallback

      nextOptions.asyncCallback = (type, res) => {
        asyncCallback?.(type, res)
        if (type === 'ok') {
          resolve(res)
        } else {
          reject(res)
        }
      }

      // nextOptions.asyncCancelCallback = (result) => {
      //   userAsyncCancelCallback?.(result)
      //   reject(result)
      // }

      const userOnBackgroundClickClose = baseOptions.onBackgroundClickClose
      const userOnEscClose = baseOptions.onEscClose

      baseOptions.onBackgroundClickClose = () => {
        userOnBackgroundClickClose?.()
        reject()
      }

      baseOptions.onEscClose = () => {
        userOnEscClose?.()
        reject()
      }

      this.updateDialogOptionsStatic(nextOptions)
      if (baseOptions) {
        this.updateBaseOptionsStatic(baseOptions)
      }
      this.baseOpen(contentProps)
    })
  }

  public updateDialogOptionsStatic = (dialogOptions: DialogPortalOptions) => {
    Object.assign(this.dialogOptions, dialogOptions)
  }

  public updateBaseOptionsStatic = (options: PopupPortalBaseOptions) => {
    Object.assign(this.baseOptions, options)
  }
}

function getDefaultDialogPopupOptions(): PopupPortalBaseOptions {
  return {
    positionType: 'dialog-center',
    contentAnimationConfig: 'dialogZoomOut',
    overlay: false,
    clickToClose: false,
    lockScroll: true,
  }
}
