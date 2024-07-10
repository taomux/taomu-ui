import type { TransitionConfig } from './transition'

const defaultOptions: KeyframeEffectOptions = {
  duration: 300,
  easing: 'ease-out',
}

export const fade: TransitionConfig = {
  options: defaultOptions,
  enter: { keyframes: [{ opacity: 0 }, { opacity: 1 }] },
  leave: { keyframes: [{ opacity: 1 }, { opacity: 0 }] },
}

export const slideLeft: TransitionConfig = {
  options: defaultOptions,
  enter: {
    keyframes: [{ transform: 'translate3d(-100%, 0, 0)' }, { transform: 'translate3d(0, 0, 0)' }],
  },
  leave: {
    keyframes: [{ transform: 'translate3d(0, 0, 0)' }, { transform: 'translate3d(-100%, 0, 0)' }],
  },
}

export const slideLeftFade: TransitionConfig = {
  options: defaultOptions,
  enter: {
    keyframes: [
      { transform: 'translate3d(-100%, 0, 0)', opacity: 0 },
      { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    ],
  },
  leave: {
    keyframes: [
      { transform: 'translate3d(0, 0, 0)', opacity: 1 },
      { transform: 'translate3d(-100%, 0, 0)', opacity: 0 },
    ],
  },
}

export const slideRight: TransitionConfig = {
  options: defaultOptions,
  enter: {
    keyframes: [{ transform: 'translate3d(100%, 0, 0)' }, { transform: 'translate3d(0, 0, 0)' }],
  },
  leave: {
    keyframes: [{ transform: 'translate3d(0, 0, 0)' }, { transform: 'translate3d(100%, 0, 0)' }],
  },
}

export const slideRightFade: TransitionConfig = {
  options: defaultOptions,
  enter: {
    keyframes: [
      { transform: 'translate3d(100%, 0, 0)', opacity: 0 },
      { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    ],
  },
  leave: {
    keyframes: [
      { transform: 'translate3d(0, 0, 0)', opacity: 1 },
      { transform: 'translate3d(100%, 0, 0)', opacity: 0 },
    ],
  },
}

export const slideTop: TransitionConfig = {
  options: defaultOptions,
  enter: {
    keyframes: [{ transform: 'translate3d(0, -100%, 0)' }, { transform: 'translate3d(0, 0, 0)' }],
  },
  leave: {
    keyframes: [{ transform: 'translate3d(0, 0, 0)' }, { transform: 'translate3d(0, -100%, 0)' }],
  },
}

export const slideTopFade: TransitionConfig = {
  options: defaultOptions,
  enter: {
    keyframes: [
      { transform: 'translate3d(0, -100%, 0)', opacity: 0 },
      { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    ],
  },
  leave: {
    keyframes: [
      { transform: 'translate3d(0, 0, 0)', opacity: 1 },
      { transform: 'translate3d(0, -100%, 0)', opacity: 0 },
    ],
  },
}

export const slideBottom: TransitionConfig = {
  options: defaultOptions,
  enter: {
    keyframes: [{ transform: 'translate3d(0, 100%, 0)' }, { transform: 'translate3d(0, 0, 0)' }],
  },
  leave: {
    keyframes: [{ transform: 'translate3d(0, 0, 0)' }, { transform: 'translate3d(0, 100%, 0)' }],
  },
}

export const slideBottomFade: TransitionConfig = {
  options: defaultOptions,
  enter: {
    keyframes: [
      { transform: 'translate3d(0, 100%, 0)', opacity: 0 },
      { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    ],
  },
  leave: {
    keyframes: [
      { transform: 'translate3d(0, 0, 0)', opacity: 1 },
      { transform: 'translate3d(0, 100%, 0)', opacity: 0 },
    ],
  },
}

export const throughLeft: TransitionConfig = {
  options: defaultOptions,
  enter: {
    keyframes: [{ transform: 'translate3d(-100%, 0, 0)' }, { transform: 'translate3d(0, 0, 0)' }],
  },
  leave: {
    keyframes: [{ transform: 'translate3d(0, 0, 0)' }, { transform: 'translate3d(100%, 0, 0)' }],
  },
}

export const throughLeftFade: TransitionConfig = {
  options: defaultOptions,
  enter: {
    keyframes: [
      { transform: 'translate3d(-100%, 0, 0)', opacity: 0 },
      { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    ],
  },
  leave: {
    keyframes: [
      { transform: 'translate3d(0, 0, 0)', opacity: 1 },
      { transform: 'translate3d(100%, 0, 0)', opacity: 0 },
    ],
  },
}

export const throughRight: TransitionConfig = {
  options: defaultOptions,
  enter: {
    keyframes: [{ transform: 'translate3d(100%, 0, 0)' }, { transform: 'translate3d(0, 0, 0)' }],
  },
  leave: {
    keyframes: [{ transform: 'translate3d(0, 0, 0)' }, { transform: 'translate3d(-100%, 0, 0)' }],
  },
}

export const throughRightFade: TransitionConfig = {
  options: defaultOptions,
  enter: {
    keyframes: [
      { transform: 'translate3d(100%, 0, 0)', opacity: 0 },
      { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    ],
  },
  leave: {
    keyframes: [
      { transform: 'translate3d(0, 0, 0)', opacity: 1 },
      { transform: 'translate3d(-100%, 0, 0)', opacity: 0 },
    ],
  },
}

export const throughTop: TransitionConfig = {
  options: defaultOptions,
  enter: {
    keyframes: [{ transform: 'translate3d(0, -100%, 0)' }, { transform: 'translate3d(0, 0, 0)' }],
  },
  leave: {
    keyframes: [{ transform: 'translate3d(0, 0, 0)' }, { transform: 'translate3d(0, 100%, 0)' }],
  },
}

export const throughTopFade: TransitionConfig = {
  options: defaultOptions,
  enter: {
    keyframes: [
      { transform: 'translate3d(0, -100%, 0)', opacity: 0 },
      { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    ],
  },
  leave: {
    keyframes: [
      { transform: 'translate3d(0, 0, 0)', opacity: 1 },
      { transform: 'translate3d(0, 100%, 0)', opacity: 0 },
    ],
  },
}

export const throughBottom: TransitionConfig = {
  options: defaultOptions,
  enter: {
    keyframes: [{ transform: 'translate3d(0, 100%, 0)' }, { transform: 'translate3d(0, 0, 0)' }],
  },
  leave: {
    keyframes: [{ transform: 'translate3d(0, 0, 0)' }, { transform: 'translate3d(0, -100%, 0)' }],
  },
}

export const throughBottomFade: TransitionConfig = {
  options: defaultOptions,
  enter: {
    keyframes: [
      { transform: 'translate3d(0, 100%, 0)', opacity: 0 },
      { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    ],
  },
  leave: {
    keyframes: [
      { transform: 'translate3d(0, 0, 0)', opacity: 1 },
      { transform: 'translate3d(0, -100%, 0)', opacity: 0 },
    ],
  },
}

export const moveLeft: TransitionConfig = {
  options: defaultOptions,
  enter: {
    keyframes: [
      { transform: 'translate3d(-12px, 0, 0)', opacity: 0 },
      { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    ],
  },
  leave: {
    keyframes: [
      { transform: 'translate3d(0, 0, 0)', opacity: 1 },
      { transform: 'translate3d(-12px, 0, 0)', opacity: 0 },
    ],
  },
}

export const moveRight: TransitionConfig = {
  options: defaultOptions,
  enter: {
    keyframes: [
      { transform: 'translate3d(12px, 0, 0)', opacity: 0 },
      { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    ],
  },
  leave: {
    keyframes: [
      { transform: 'translate3d(0, 0, 0)', opacity: 1 },
      { transform: 'translate3d(12px, 0, 0)', opacity: 0 },
    ],
  },
}

export const moveTop: TransitionConfig = {
  options: defaultOptions,
  enter: {
    keyframes: [
      { transform: 'translate3d(0, -12px, 0)', opacity: 0 },
      { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    ],
  },
  leave: {
    keyframes: [
      { transform: 'translate3d(0, 0, 0)', opacity: 1 },
      { transform: 'translate3d(0, -12px, 0)', opacity: 0 },
    ],
  },
}

export const moveBottom: TransitionConfig = {
  options: defaultOptions,
  enter: {
    keyframes: [
      { transform: 'translate3d(0, 12px, 0)', opacity: 0 },
      { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    ],
  },
  leave: {
    keyframes: [
      { transform: 'translate3d(0, 0, 0)', opacity: 1 },
      { transform: 'translate3d(0, 12px, 0)', opacity: 0 },
    ],
  },
}

export const zoomIn: TransitionConfig = {
  options: defaultOptions,
  enter: {
    keyframes: [
      { transform: 'scale3d(0.5, 0.5, 0.5)', opacity: 0 },
      { transform: 'scale3d(1, 1, 1)', opacity: 1 },
    ],
  },
  leave: {
    keyframes: [
      { transform: 'scale3d(1, 1, 1)', opacity: 1 },
      { transform: 'scale3d(0.5, 0.5, 0.5)', opacity: 0 },
    ],
  },
}

export const zoomOut: TransitionConfig = {
  options: defaultOptions,
  enter: {
    keyframes: [
      { transform: 'scale3d(1.5, 1.5, 1.5)', opacity: 0 },
      { transform: 'scale3d(1, 1, 1)', opacity: 1 },
    ],
  },
  leave: {
    keyframes: [
      { transform: 'scale3d(1, 1, 1)', opacity: 1 },
      { transform: 'scale3d(1.5, 1.5, 1.5)', opacity: 0 },
    ],
  },
}

export const throughZoomIn: TransitionConfig = {
  options: defaultOptions,
  enter: {
    keyframes: [
      { transform: 'scale3d(0.5, 0.5, 0.5)', opacity: 0 },
      { transform: 'scale3d(1, 1, 1)', opacity: 1 },
    ],
  },
  leave: {
    keyframes: [
      { transform: 'scale3d(1, 1, 1)', opacity: 1 },
      { transform: 'scale3d(1.5, 1.5, 1.5)', opacity: 0 },
    ],
  },
}

export const throughZoomOut: TransitionConfig = {
  options: defaultOptions,
  enter: {
    keyframes: [
      { transform: 'scale3d(1.5, 1.5, 1.5)', opacity: 0 },
      { transform: 'scale3d(1, 1, 1)', opacity: 1 },
    ],
  },
  leave: {
    keyframes: [
      { transform: 'scale3d(1, 1, 1)', opacity: 1 },
      { transform: 'scale3d(0.5, 0.5, 0.5)', opacity: 0 },
    ],
  },
}

export const dialogZoomOut: TransitionConfig = {
  options: defaultOptions,
  enter: {
    keyframes: [
      { transform: 'translateX(-50%) scale3d(1.28, 1.28, 1.28)', opacity: 0 },
      { transform: 'translateX(-50%) scale3d(1, 1, 1)', opacity: 1 },
    ],
  },
  leave: {
    keyframes: [
      { transform: 'translateX(-50%) scale3d(1, 1, 1)', opacity: 1 },
      { transform: 'translateX(-50%) scale3d(0.78, 0.78, 0.78)', opacity: 0 },
    ],
  },
}
