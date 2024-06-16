import { hasClassNameLoopParent } from 'taomu-toolkit'

import type { PopupPositionType, PopupEqualWidthUnion, PopupPositionBase, PopupRectType } from './popup'
import { popupStore } from './popup.store'
export function getAbsoluteAnimation(positionType?: PopupPositionType, isTargetRelative?: boolean) {
  if (isTargetRelative) {
    switch (positionType) {
      case 'top-left':
      case 'top-right':
        return 'ac-move-top'

      case 'bottom-left':
      case 'bottom-right':
        return 'ac-move-bottom'
    }
  }

  switch (positionType) {
    case 'bottom':
    case 'center-bottom':
    case 'bottom-center':
      return 'ac-move-bottom'

    case 'left':
    case 'left-center':
    case 'left-bottom':
    case 'left-top':
    case 'top-left':
    case 'bottom-left':
      return 'ac-move-left'

    case 'right':
    case 'right-center':
    case 'right-bottom':
    case 'right-top':
    case 'top-right':
    case 'bottom-right':
      return 'ac-move-right'

    default:
      return 'ac-move-top'
  }
}

export function setTargetRelativePosition(
  target?: HTMLElement | null,
  contentElement?: HTMLElement | null,
  position: PopupPositionType = 'bottom-left',
  equalWidth?: PopupEqualWidthUnion
) {
  if (!target) return
  if (!contentElement?.className.includes('target-relative-position')) return

  const targetRect = target.getBoundingClientRect()
  let contentRect = contentElement.getBoundingClientRect()
  let positionType = position
  const nextRect: PopupRectType = { ...contentRect }

  function changePosition(current: PopupPositionBase, next: PopupPositionBase) {
    positionType = positionType.replace(current, next) as PopupPositionType
  }

  // 容器与目标元素等宽处理
  if (equalWidth === 'equal') {
    contentElement.style.width = targetRect.width + 'px'
  } else if (equalWidth === 'max-width') {
    contentElement.style.maxWidth = targetRect.width + 'px'
  } else if (equalWidth === 'min-width') {
    contentElement.style.minWidth = targetRect.width + 'px'
  }

  if (positionType.startsWith('top')) {
    if (targetRect.top - contentRect.height < 0) {
      changePosition('top', 'bottom')
    }
  } else if (positionType.startsWith('bottom')) {
    if (targetRect.bottom + contentRect.height > window.innerHeight) {
      changePosition('bottom', 'top')
    }
  } else if (positionType.endsWith('top')) {
    if (targetRect.bottom + contentRect.height > window.innerHeight) {
      changePosition('top', 'bottom')
    }
  } else if (positionType.endsWith('bottom')) {
    if (targetRect.top - contentRect.height < 0) {
      changePosition('bottom', 'top')
    }
  } else if (positionType.startsWith('left')) {
    if (targetRect.left - contentRect.width < 0) {
      changePosition('left', 'right')
    }
  } else if (positionType.startsWith('right')) {
    if (targetRect.right + contentRect.width > window.innerWidth) {
      changePosition('right', 'left')
    }
  }

  contentElement.classList.add(`popup-fixed-position-${positionType}`)

  contentRect = contentElement.getBoundingClientRect() // 计算定位后，重新获取元素矩形信息

  switch (positionType) {
    case 'top-left':
      nextRect.top = targetRect.top - contentRect.height
      nextRect.left = targetRect.left
      break

    case 'top':
    case 'top-center':
    case 'center-top':
      nextRect.top = targetRect.top - contentRect.height
      nextRect.left = targetRect.left + targetRect.width / 2 - contentRect.width / 2
      break
    case 'top-right':
      nextRect.top = targetRect.top - contentRect.height
      nextRect.left = targetRect.right - contentRect.width
      break

    case 'bottom-left':
      nextRect.top = targetRect.bottom
      nextRect.left = targetRect.left
      break

    case 'bottom':
    case 'bottom-center':
    case 'center-bottom':
      nextRect.top = targetRect.bottom
      nextRect.left = targetRect.left + targetRect.width / 2 - contentRect.width / 2
      break

    case 'bottom-right':
      nextRect.top = targetRect.bottom
      nextRect.left = targetRect.right - contentRect.width
      break

    case 'left-top':
      nextRect.top = targetRect.top
      nextRect.left = targetRect.left - contentRect.width
      break

    case 'left-center':
    case 'left':
      nextRect.top = targetRect.top + targetRect.height / 2 - contentRect.height / 2
      nextRect.left = targetRect.left - contentRect.width
      break

    case 'left-bottom':
      nextRect.top = targetRect.bottom - contentRect.height
      nextRect.left = targetRect.left - contentRect.width
      break

    case 'right-top':
      nextRect.top = targetRect.top
      nextRect.left = targetRect.right
      break

    case 'right':
    case 'right-center':
    case 'center-right':
      nextRect.top = targetRect.top + targetRect.height / 2 - contentRect.height / 2
      nextRect.left = targetRect.right
      break

    case 'right-bottom':
      nextRect.top = targetRect.bottom - contentRect.height
      nextRect.left = targetRect.right
      break
  }

  contentElement.style.left = nextRect.left ? nextRect.left + 'px' : 'unset'
  contentElement.style.top = nextRect.top ? nextRect.top + 'px' : 'unset'
  contentElement.style.right = nextRect.right ? nextRect.right + 'px' : 'unset'
  contentElement.style.bottom = nextRect.bottom ? nextRect.bottom + 'px' : 'unset'
}

export function setCenterAbsolutePosition(contentElement: HTMLElement) {
  const contentRect = contentElement.getBoundingClientRect()

  let top = window.innerHeight / 2 - contentRect.height / 2
  let leftOffset = contentRect.width / 2

  if (top < 0) {
    top = 0
  } else if (top > 150) {
    top = 150
  }

  contentElement.style.top = top + 'px'
  contentElement.style.left = `calc(50% - ${leftOffset}px)`
}

const outsideClickCloseMap = new Map<string, boolean>()

export function handleOutsideClickClose(modalId: string, close: Function) {
  function outsideClickCloseHandler(event: MouseEvent) {
    if (hasClassNameLoopParent(event.target as HTMLElement, modalId)) {
      return // 忽略弹层内部点击
    }

    document.removeEventListener('click', outsideClickCloseHandler)
    outsideClickCloseMap.delete(modalId)
    close()
  }

  if (outsideClickCloseMap.has(modalId)) {
    return
  }

  outsideClickCloseMap.set(modalId, true)
  document.addEventListener('click', outsideClickCloseHandler)
}

export function closeAllPopups() {
  const { popupsMap } = popupStore.getState()
  for (const [, [popupPortal]] of popupsMap) {
    popupPortal.close()
  }
}
