import { AutoAnimationPlugin } from '@formkit/auto-animate'

/**
 * 按钮 Loading 出入场动画
 *
 * @see https://auto-animate.formkit.com/#plugins
 */
export const buttonAutoAnimate: AutoAnimationPlugin = (el, action) => {
  if (action === 'remain') {
    return null as any // 忽略增量计算
  }

  let keyframes: Keyframe[] = []
  const options: KeyframeEffectOptions = {
    duration: 600,
    easing: 'cubic-bezier(0.175, 0.82, 0.265, 1)',
  }

  if (action === 'add') {
    keyframes = [
      { transform: 'translate3d(100%, 0, 0)', opacity: 0 },
      { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    ]
  }

  if (action === 'remove') {
    options.duration = 200
    options.easing = 'ease-out'
    keyframes = [
      { transform: 'translate3d(0, 0, 0)', opacity: 1 },
      { transform: 'translate3d(-100%, 0, 0)', opacity: 0 },
    ]
  }

  return new KeyframeEffect(el, keyframes, options)
}
