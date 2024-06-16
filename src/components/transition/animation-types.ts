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
