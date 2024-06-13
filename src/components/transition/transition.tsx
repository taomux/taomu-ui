import React from 'react'

import * as animationTypes from './animation-types'

export interface TransitionProps {
  children: React.ReactElement
  /** children 的 ref 代理 */
  proxyRef?: React.MutableRefObject<HTMLElement | null>
  /** 外部控制的状态，决定 children 是否进场 */
  show?: boolean
  /** 内置动画类型 */
  animationType?: AnimationTypes
  /** 动画配置 */
  config?: TransitionConfig
  onBeforeEnter?: (el: HTMLElement) => void
  onAfterEnter?: (el: HTMLElement) => void
  onBeforeLeave?: (el: HTMLElement) => void
  onAfterLeave?: () => void
}

export interface TransitionConfig {
  /** 此处的 options 将被合并至 enter 和 exit，低优先级 */
  options?: KeyframeEffectOptions
  /** 进场动画配置 */
  enter?: KeyframeEffectArgs | KeyframeEffectBuilder
  /** 出场动画配置 */
  leave?: KeyframeEffectArgs | KeyframeEffectBuilder
}

export type AnimationTypes = keyof typeof animationTypes

export interface KeyframeEffectArgs {
  keyframes: Keyframe[] | PropertyIndexedKeyframes | null
  options?: KeyframeEffectOptions
}

/**
 * 在一个构建函数中创建 [KeyframeEffect](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect)
 */
export type KeyframeEffectBuilder = (el: HTMLElement, options?: KeyframeEffectOptions) => KeyframeEffectArgs | void

export const Transition: React.FC<TransitionProps> = ({
  children,
  proxyRef,
  show,
  config,
  animationType = 'fade',
  onBeforeEnter,
  onAfterEnter,
  onBeforeLeave,
  onAfterLeave,
}) => {
  const nodeRef = React.useRef<HTMLElement>(null)
  const animationRef = React.useRef<Animation | void>()
  const [isRenderNode, setIsRenderNode] = React.useState(show)

  React.useEffect(() => {
    console.log([isRenderNode], nodeRef.current)

    if (proxyRef) {
      proxyRef.current = nodeRef.current
    }
  }, [isRenderNode])

  React.useEffect(() => {
    if (show) {
      if (animationRef?.current?.playState === 'running') {
        nodeRef.current!.style.visibility = 'hidden' // 防止动画重叠
        animationRef?.current?.cancel()
        setIsRenderNode(false)
        setTimeout(() => {
          setIsRenderNode(true)
        }, 0)
      } else {
        setIsRenderNode(true)
      }
    } else if (isRenderNode) {
      if (!nodeRef.current) return
      animationRef.current = createAnimation(nodeRef.current, config, animationType, 'exit')
      if (!animationRef.current) return

      animationRef.current.play()

      animationRef.current.onfinish = () => {
        nodeRef.current!.style.display = 'none'
        setIsRenderNode(false)
      }
    }
  }, [show])

  React.useEffect(() => {
    if (isRenderNode) {
      if (!nodeRef.current) return
      nodeRef.current.style.visibility = ''
      animationRef.current = createAnimation(nodeRef.current, config, animationType, 'enter')
      if (!animationRef.current) return
      animationRef.current.play()
    }
  }, [isRenderNode])

  if (!isRenderNode) return null

  return React.cloneElement(children, { ref: nodeRef })
}

function createAnimation(
  el: HTMLElement,
  config?: TransitionConfig,
  animationType?: AnimationTypes,
  type: 'enter' | 'exit' = 'enter'
): Animation | void {
  if (typeof config === 'object') {
    const item = config[type]

    if (typeof item === 'function') {
      const res = item(el, config.options)
      if (!res?.keyframes) return
      return new Animation(new KeyframeEffect(el, res.keyframes, Object.assign({}, config.options, res.options)))
    } else if (typeof item === 'object') {
      return new Animation(new KeyframeEffect(el, item.keyframes, Object.assign({}, config.options, item.options)))
    }
  } else if (animationType) {
    if (Object.prototype.hasOwnProperty.call(animationTypes, animationType)) {
      return createAnimation(el, animationTypes[animationType], undefined, type)
    }
  }
}
