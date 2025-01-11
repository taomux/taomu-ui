import React from 'react'
import { createPortal } from 'react-dom'
import clsx from 'clsx'
import { uuid } from 'taomu-toolkit'

import { PopupProps, PopupRef, Popup, POPUP_ID_TEMPLATE } from './popup'
import { popupStore } from './popup.store'

export type PortalContainerType = HTMLElement

export interface PopupPortalBaseOptions extends PopupProps {
  /** 自定义传送目标容器, 如果为空将自动在 document.body 下创建容器 */
  portalContainer?: PortalContainerType
  /** 自动创建的容器 Id, 默认值: 'taomu-popup-container' */
  createContainerId?: string
  /** 自动创建的容器 className */
  createContainerClass?: string
}

/**
 * Popup 传送门
 */
export abstract class PopupPortalBase<ContentProps extends object = any, Options extends object = any> {
  public readonly popupId = uuid(POPUP_ID_TEMPLATE)

  public popupRef = React.createRef<PopupRef>()
  public createIndex = popupStore.getState().popupsMap.size + 1
  /** 是否进场 */
  public isEnter = false

  constructor(
    /** 内容组件 */
    public Content: React.ComponentType<ContentProps>,
    public baseOptions: PopupPortalBaseOptions = {}
  ) {}

  get containerId() {
    return this.baseOptions.createContainerId || 'taomu-popup-container'
  }

  get container(): PortalContainerType {
    if (this.baseOptions.portalContainer) return this.baseOptions.portalContainer

    const containerId = this.containerId
    const container = document.getElementById(containerId)
    if (container) return container

    const containerElement = document.createElement('div')
    containerElement.id = containerId
    containerElement.className = clsx('taomu-popup-container', this.baseOptions.createContainerClass)
    // containerElement.style.width = '0'
    // containerElement.style.height = '0'
    document.body.appendChild(containerElement)

    return containerElement
  }

  /** 是否已打开 */
  get isOpened() {
    return !!this.popupRef.current
  }

  public readonly render = (contentProps: ContentProps) => {
    const {
      portalContainer,
      createContainerId,
      createContainerClass,
      zIndex = 1000,
      onBeforeEnter,
      onBeforeLeave,
      onLeave,
      ...popupProps
    } = this.baseOptions

    const Content = this.Content

    return createPortal(
      <Popup
        ref={this.popupRef}
        key={this.popupId}
        popupId={this.popupId}
        zIndex={zIndex + this.createIndex}
        show
        onBeforeEnter={(e) => {
          this.isEnter = true
          return onBeforeEnter?.(e)
        }}
        onBeforeLeave={(e) => {
          this.isEnter = false
          return onBeforeLeave?.(e)
        }}
        onLeave={() => {
          this.destroy()
          return onLeave?.()
        }}
        {...popupProps}
      >
        <Content {...(contentProps as any)} />
      </Popup>,
      this.container,
      this.popupId
    )
  }

  abstract open: (contentProps?: ContentProps, options?: Options) => any

  /** 打开弹层 */
  public baseOpen(contentProps?: ContentProps) {
    const { popupsMap, updateCount } = popupStore.getState()
    popupsMap.set(this.popupId, [this, contentProps])
    popupStore.setState({ popupsMap, updateCount: updateCount + 1 })
    if (this.isOpened) {
      this.popupRef.current?.open()
    }
  }

  /** 关闭弹层 */
  public close = () => {
    if (!this.popupRef.current) return
    this.popupRef.current?.close()
  }

  /** 销毁弹层 (无出场动画) */
  public destroy = () => {
    const { popupsMap, updateCount } = popupStore.getState()
    popupsMap.delete(this.popupId)
    popupStore.setState({ popupsMap, updateCount: updateCount + 1 })
  }

  abstract updateBaseOptionsStatic: (options: PopupPortalBaseOptions) => void

  /**
   * 更新弹层内容
   */
  public dispatchUpdate = (contentProps?: ContentProps, options?: Options) => {
    const { popupsMap, updateCount } = popupStore.getState()
    if (!popupsMap.has(this.popupId)) return
    if (options) this.updateBaseOptionsStatic(options)

    popupsMap.set(this.popupId, [this, contentProps])
    popupStore.setState({ popupsMap, updateCount: updateCount + 1 })
  }
}
