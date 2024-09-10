import { AnimationConfig, TransitionConfig } from '../transition'
import type { MenuContextProps } from './menu.ctx'

const ANIMATION_OPTIONS: KeyframeEffectOptions = {
  duration: 600,
  easing: 'cubic-bezier(0.175, 0.82, 0.265, 1)',
}

const topToBottomAnimation: TransitionConfig = {
  options: ANIMATION_OPTIONS,
  enter: {
    keyframes: [{ transform: 'translate3d(0, -200%, 0)' }, { transform: 'translate3d(0, -50%, 0)' }],
  },
  leave: {
    keyframes: [{ transform: 'translate3d(0, -50%, 0)' }, { transform: 'translate3d(0, 200%, 0)' }],
  },
}

const bottomToTopAnimation: TransitionConfig = {
  options: ANIMATION_OPTIONS,
  enter: {
    keyframes: [{ transform: 'translate3d(0, 200%, 0)' }, { transform: 'translate3d(0, -50%, 0)' }],
  },
  leave: {
    keyframes: [{ transform: 'translate3d(0, -50%, 0)' }, { transform: 'translate3d(0, -250%, 0)' }],
  },
}

const leftToRightAnimation: TransitionConfig = {
  options: ANIMATION_OPTIONS,
  enter: {
    keyframes: [{ transform: 'translate3d(-200%, 0, 0)' }, { transform: 'translate3d(-50%, 0, 0)' }],
  },
  leave: {
    keyframes: [{ transform: 'translate3d(-50%, 0, 0)' }, { transform: 'translate3d(200%, 0, 0)' }],
  },
}

const rightToLeftAnimation: TransitionConfig = {
  options: ANIMATION_OPTIONS,
  enter: {
    keyframes: [{ transform: 'translate3d(200%, 0, 0)' }, { transform: 'translate3d(-50%, 0, 0)' }],
  },
  leave: {
    keyframes: [{ transform: 'translate3d(-50%, 0, 0)' }, { transform: 'translate3d(-250%, 0, 0)' }],
  },
}

export function getMenuActiveBlockAnimationConfig(
  prevIndex?: number,
  currentIndex?: number,
  direction?: MenuContextProps['direction']
): AnimationConfig | undefined {
  if (prevIndex === undefined || currentIndex === undefined) {
    return undefined
  }

  if (prevIndex - currentIndex > 0) {
    if (direction === 'vertical') {
      return bottomToTopAnimation
    } else {
      return rightToLeftAnimation
    }
  } else {
    if (direction === 'vertical') {
      return topToBottomAnimation
    } else {
      return leftToRightAnimation
    }
  }
}
