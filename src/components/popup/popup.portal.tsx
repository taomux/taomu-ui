import React from 'react'
import { createPortal } from 'react-dom'
import clsx from 'clsx'
import { uuid } from 'taomu-toolkit'

import { PopupProps, PopupRef, Popup } from './popup'
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

export class PopupPortal<ContentProps extends object = any> {
  public readonly popupId = uuid()

  public createIndex = popupStore.getState().popupsMap.size + 1

  public popupRef = React.createRef<PopupRef>()

  get container(): PortalContainerType {
    if (this.options.portalContainer) return this.options.portalContainer

    const containerId = this.options.createContainerId || 'taomu-popup-container'
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

  constructor(
    public content: React.ComponentType<ContentProps>,
    public options: PopupPortalOptions = {}
  ) {}

  public readonly render = (contentProps: ContentProps) => {
    const { portalContainer, createContainerId, createContainerClass, zIndex = 1000, onLeave, ...popupProps } = this.options

    const Content = this.content

    return createPortal(
      <Popup
        ref={this.popupRef}
        key={this.popupId}
        popupId={this.popupId}
        zIndex={zIndex + this.createIndex}
        show
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

  // TODO 未测试
  public updateOptions = (options: Partial<PopupPortalOptions>) => {
    Object.assign(this.options, options)
    const { popupsMap } = popupStore.getState()
    popupStore.setState({ popupsMap })
  }
}
