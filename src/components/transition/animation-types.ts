import type { TransitionConfig } from './transition'

const defaultOptions: KeyframeEffectOptions = {
  duration: 300,
  easing: 'ease-out',
}

export const fade: TransitionConfig = {
  options: defaultOptions,
  enter: { keyframes: [{ opacity: 0 }, { opacity: 1 }] },
  exit: { keyframes: [{ opacity: 1 }, { opacity: 0 }] },
}

export const slideLeft: TransitionConfig = {
  options: defaultOptions,
  enter: {
    keyframes: [{ transform: 'translate3d(-100%, 0, 0)' }, { transform: 'translate3d(0, 0, 0)' }],
  },
  exit: {
    keyframes: [{ transform: 'translate3d(0, 0, 0)' }, { transform: 'translate3d(100%, 0, 0)' }],
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
  exit: {
    keyframes: [
      { transform: 'translate3d(0, 0, 0)', opacity: 1 },
      { transform: 'translate3d(100%, 0, 0)', opacity: 0 },
    ],
  },
}

export const slideRight: TransitionConfig = {
  options: defaultOptions,
  enter: {
    keyframes: [{ transform: 'translate3d(100%, 0, 0)' }, { transform: 'translate3d(0, 0, 0)' }],
  },
  exit: {
    keyframes: [{ transform: 'translate3d(0, 0, 0)' }, { transform: 'translate3d(-100%, 0, 0)' }],
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
  exit: {
    keyframes: [
      { transform: 'translate3d(0, 0, 0)', opacity: 1 },
      { transform: 'translate3d(-100%, 0, 0)', opacity: 0 },
    ],
  },
}
