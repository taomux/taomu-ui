import React from 'react'

import { PopupPortalBase, PopupPortalBaseOptions } from './popup.portal.base'

export interface PopupPortalOptions extends PopupPortalBaseOptions {}

/**
 * Popup 传送门
 */
export class PopupPortal<ContentProps extends object = any> extends PopupPortalBase<ContentProps, PopupPortalOptions> {
  constructor(
    /** 内容组件 */
    public Content: React.ComponentType<ContentProps>,
    /** 选项 */
    public baseOptions: PopupPortalOptions = {}
  ) {
    super(Content, baseOptions)
  }

  /** 打开弹层 */
  public open = (contentProps?: ContentProps, options?: PopupPortalOptions) => {
    if (options) this.updateBaseOptionsStatic(options)
    this.baseOpen(contentProps)
  }

  public updateBaseOptionsStatic = (options: PopupPortalOptions) => {
    Object.assign(this.baseOptions, options)
  }
}
