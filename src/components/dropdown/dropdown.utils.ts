import { TransitionConfig } from '../transition'
import type { PopupAnimationConfigBuilder } from '../popup'

export const dropdownAnimationConfigHandler: PopupAnimationConfigBuilder = (positionType, isTargetRelative) => {
  console.log(positionType, isTargetRelative)

  if (isTargetRelative) {
    switch (positionType) {
      case 'top-left':
      case 'top-right':
        return getAnimationConfig('top')

      case 'bottom-left':
      case 'bottom-right':
        return getAnimationConfig('bottom')
    }
  }

  switch (positionType) {
    case 'bottom':
    case 'center-bottom':
    case 'bottom-center':
      return getAnimationConfig('bottom')

    case 'left':
    case 'left-center':
    case 'left-bottom':
    case 'left-top':
    case 'top-left':
    case 'bottom-left':
      return getAnimationConfig('left')

    case 'right':
    case 'right-center':
    case 'right-bottom':
    case 'right-top':
    case 'top-right':
    case 'bottom-right':
      return getAnimationConfig('right')

    default:
      return getAnimationConfig('top')
  }
}

function getAnimationConfig(type: 'top' | 'right' | 'bottom' | 'left') {
  const config: TransitionConfig = {
    options: { duration: 300, easing: 'ease-out' },
    enter: {
      keyframes: [
        { transform: 'translate3d(0, -12px, 0)', opacity: 0, backdropFilter: 'blur(5px)' },
        { transform: 'translate3d(0, 0, 0)', opacity: 1, backdropFilter: 'blur(5px)' },
      ],
    },
    leave: {
      keyframes: [
        { transform: 'translate3d(0, 0, 0)', opacity: 1, backdropFilter: 'blur(5px)' },
        { transform: 'translate3d(0, -12px, 0)', opacity: 0, backdropFilter: 'blur(5px)' },
      ],
    },
  }

  return config
}
