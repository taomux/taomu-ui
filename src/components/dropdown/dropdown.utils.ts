import { TransitionConfig } from '../transition'
import type { PopupAnimationConfigBuilder } from '../popup'

export const dropdownAnimationConfigHandler: PopupAnimationConfigBuilder = (positionType, isTargetRelative) => {
  if (isTargetRelative) {
    switch (positionType) {
      case 'top-left':
      case 'top-right':
        return getAnimationConfig('bottom')

      case 'bottom-left':
      case 'bottom-right':
        return getAnimationConfig('top')
    }
  }

  switch (positionType) {
    case 'bottom':
    case 'center-bottom':
    case 'bottom-center':
      return getAnimationConfig('top')

    case 'left':
    case 'left-center':
    case 'left-bottom':
    case 'left-top':
    case 'top-left':
    case 'bottom-left':
      return getAnimationConfig('right')

    case 'right':
    case 'right-center':
    case 'right-bottom':
    case 'right-top':
    case 'top-right':
    case 'bottom-right':
      return getAnimationConfig('left')

    default:
      return getAnimationConfig('bottom')
  }
}

function getAnimationConfig(type: 'top' | 'right' | 'bottom' | 'left') {
  let xyzEnter1 = ''
  let xyzEnter2 = ''
  let xyzLeave1 = ''
  let xyzLeave2 = ''

  switch (type) {
    case 'top':
      xyzEnter1 = '0, -8px, 0'
      xyzEnter2 = '0, 0, 0'
      xyzLeave1 = '0, 0, 0'
      xyzLeave2 = '0, -8px, 0'
      break
    case 'right':
      xyzEnter1 = '8px, 0, 0'
      xyzEnter2 = '0, 0, 0'
      xyzLeave1 = '0, 0, 0'
      xyzLeave2 = '8px, 0, 0'
      break
    case 'bottom':
      xyzEnter1 = '0, 8px, 0'
      xyzEnter2 = '0, 0, 0'
      xyzLeave1 = '0, 0, 0'
      xyzLeave2 = '0, 8px, 0'
      break
    case 'left':
      xyzEnter1 = '-8px, 0, 0'
      xyzEnter2 = '0, 0, 0'
      xyzLeave1 = '0, 0, 0'
      xyzLeave2 = '-8px, 0, 0'
      break
  }

  const config: TransitionConfig = {
    options: { duration: 300, easing: 'ease-out' },
    enter: {
      keyframes: [
        { transform: `translate3d(${xyzEnter1})`, opacity: 0, backdropFilter: 'blur(5px)' },
        { transform: `translate3d(${xyzEnter2})`, opacity: 1, backdropFilter: 'blur(5px)' },
      ],
    },
    leave: {
      keyframes: [
        { transform: `translate3d(${xyzLeave1})`, opacity: 1, backdropFilter: 'blur(5px)' },
        { transform: `translate3d(${xyzLeave2})`, opacity: 0, backdropFilter: 'blur(5px)' },
      ],
    },
  }

  return config
}
