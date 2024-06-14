import React from 'react'
import clsx from 'clsx'
import { uuid } from 'taomu-toolkit'

import { PopupProps } from './popup'
import { usePopupStore } from './popup.store'

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
  public readonly uuid = uuid()

  get container(): PortalContainerType {
    if (this.options.portalContainer) return this.options.portalContainer

    const containerId = this.options.createContainerId || 'taomu-popup-container'
    const container = document.getElementById(containerId)
    if (container) return container

    const containerElement = document.createElement('div')
    containerElement.id = containerId
    containerElement.className = clsx('taomu-popup-container', this.options.createContainerClass)
    document.body.appendChild(containerElement)

    return containerElement
  }

  constructor(
    public content: React.FC<ContentProps>,
    public options: PopupPortalOptions = {}
  ) {
    this.register()
    // console.log(popupStore.getState())
  }

  public open() {
    const { openedPopupsList } = usePopupStore.getState()
    openedPopupsList.add(this.uuid)
    usePopupStore.setState({ openedPopupsList })
  }

  private register() {
    const { popupsMap } = usePopupStore.getState()
    popupsMap.set(this.uuid, this)
    usePopupStore.setState({ popupsMap })
  }

  public destroy = () => {
    const { popupsMap } = usePopupStore.getState()
    popupsMap.delete(this.uuid)
    usePopupStore.setState({ popupsMap })
  }
}
