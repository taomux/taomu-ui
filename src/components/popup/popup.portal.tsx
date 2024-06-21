import React from 'react'
import { createPortal } from 'react-dom'
import clsx from 'clsx'
import { uuid } from 'taomu-toolkit'

import { PopupProps, PopupRef, Popup, POPUP_ID_TEMPLATE } from './popup'
import { popupStore } from './popup.store'

export type PortalContainerType = HTMLElement

export interface PopupPortalOptions extends PopupProps {
  // /** 允许创建多实例 */
  // multiple?: boolean
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
export class PopupPortal<ContentProps extends object = any> {
  public readonly popupId = uuid(POPUP_ID_TEMPLATE)

  public popupRef = React.createRef<PopupRef>()
  public createIndex = popupStore.getState().popupsMap.size + 1
  /** 是否进场 */
  public isEnter = false

  constructor(
    /** 内容组件 */
    public Content: React.ComponentType<ContentProps>,
    /** 选项 */
    public options: PopupPortalOptions = {}
  ) {}

  get containerId() {
    return this.options.createContainerId || 'taomu-popup-container'
  }

  get container(): PortalContainerType {
    if (this.options.portalContainer) return this.options.portalContainer

    const containerId = this.containerId
    const container = document.getElementById(containerId)
    if (container) return container

    const containerElement = document.createElement('div')
    containerElement.id = containerId
    containerElement.className = clsx('taomu-popup-container', this.options.createContainerClass)
    containerElement.style.width = '0'
    containerElement.style.height = '0'
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
    } = this.options

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
          onBeforeEnter?.(e)
        }}
        onBeforeLeave={(e) => {
          this.isEnter = false
          onBeforeLeave?.(e)
        }}
        onLeave={() => {
          this.destroy()
          onLeave?.()
        }}
        {...popupProps}
      >
        <Content {...contentProps} />
      </Popup>,
      this.container,
      this.popupId
    )
  }

  /** 打开弹层 */
  public open(contentProps?: ContentProps, options?: PopupPortalOptions) {
    const { popupsMap, updateCount } = popupStore.getState()
    if (options) this.updateOptionsStatic(options)
    popupsMap.set(this.popupId, [this, contentProps])
    popupStore.setState({ popupsMap, updateCount: updateCount + 1 })
  }

  /** 关闭弹层 */
  public close = () => {
    this.popupRef.current?.close()
  }

  /** 销毁弹层 (无出场动画) */
  public destroy = () => {
    const { popupsMap, updateCount } = popupStore.getState()
    popupsMap.delete(this.popupId)
    popupStore.setState({ popupsMap, updateCount: updateCount + 1 })
  }

  public updateOptionsStatic = (options: PopupPortalOptions) => {
    Object.assign(this.options, options)
  }

  /**
   * 更新弹层内容
   */
  public dispatch = (contentProps?: ContentProps, options?: PopupPortalOptions) => {
    const { popupsMap } = popupStore.getState()
    if (!popupsMap.has(this.popupId)) return
    if (options) this.updateOptionsStatic(options)
    this.open(contentProps, options)
  }
}
