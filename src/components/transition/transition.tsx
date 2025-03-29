import React from 'react'
import clsx from 'clsx'

import * as animationTypes from './animation-types'

export type AnimationConfig = AnimationTypes | TransitionConfig

export interface TransitionProps {
  children: React.ReactElement<any>
  /** children 的 ref 代理 */
  proxyRef?: React.RefObject<HTMLElement | null> | ((el: HTMLElement | null) => void)
  /** 外部控制的状态，决定 children 是否进场 */
  show?: boolean
  /** 动画配置 */
  animationConfig?: AnimationConfig
  /** 动画函数选项，高优先级 */
  options?: KeyframeEffectOptions
  onBeforeEnter?: (el?: HTMLElement | null) => void
  onEnter?: (el: HTMLElement) => void
  onBeforeLeave?: (el: HTMLElement) => void
  onLeave?: () => void
}

export interface TransitionConfig {
  /** 此处的 options 将被合并至 enter 和 leave，低优先级 */
  options?: KeyframeEffectOptions
  /** 进场动画配置 */
  enter?: KeyframeEffectArgs | KeyframeEffectBuilder
  /** 出场动画配置 */
  leave?: KeyframeEffectArgs | KeyframeEffectBuilder
}

export type AnimationTypes = keyof typeof animationTypes | false

export interface KeyframeEffectArgs {
  keyframes: Keyframe[] | PropertyIndexedKeyframes | null
  options?: KeyframeEffectOptions
}

/**
 * 在一个构建函数中创建 [KeyframeEffect](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect)
 *
 * 构建函数返回的对象的 options 拥有最高优先级
 *
 */
export type KeyframeEffectBuilder = (el: HTMLElement, options?: KeyframeEffectOptions) => KeyframeEffectArgs | void

export const Transition: React.FC<TransitionProps> = ({
  children,
  proxyRef,
  show,
  options,
  animationConfig = 'fade',
  onBeforeEnter,
  onEnter,
  onBeforeLeave,
  onLeave,
}) => {
  const nodeRef = React.useRef<HTMLElement>(null)
  const animationRef = React.useRef<Animation | void>(undefined)
  const [isRenderNode, setIsRenderNode] = React.useState(show)
  const [animationFinished, setAnimationFinished] = React.useState(false)

  React.useEffect(() => {
    if (show) {
      if (animationRef.current?.playState === 'running') {
        animationRef.current?.cancel()
        setIsRenderNode(false)
        setTimeout(() => {
          setIsRenderNode(true)
          setTimeout(() => {
            onBeforeEnter?.(nodeRef.current)
          }, 0)
        }, 0)
      } else {
        setIsRenderNode(true)
        setTimeout(() => {
          onBeforeEnter?.(nodeRef.current)
        }, 0)
      }
    } else if (isRenderNode) {
      if (!nodeRef.current) return
      animationRef.current = createAnimation(nodeRef.current, animationConfig, 'leave', options)

      if (animationRef.current) {
        onBeforeLeave?.(nodeRef.current)
        animationRef.current.play()

        animationRef.current.onfinish = () => {
          nodeRef.current!.style.display = 'none'
          setIsRenderNode(false)
          onLeave?.()
        }
      } else {
        onBeforeLeave?.(nodeRef.current)
        onLeave?.()
      }
    }
  }, [show])

  React.useEffect(() => {
    if (isRenderNode) {
      if (!nodeRef.current) return
      if (children.props.style?.visibility !== 'hidden') {
        nodeRef.current.style.visibility = '' // 开始渲染时移除元素隐藏
      }
      animationRef.current = createAnimation(nodeRef.current, animationConfig, 'enter', options)
      if (animationRef.current) {
        animationRef.current.play()
        animationRef.current.onfinish = () => {
          setAnimationFinished(true)
          onEnter?.(nodeRef.current!)
        }
      } else {
        setAnimationFinished(true)
        onEnter?.(nodeRef.current)
      }
    }
  }, [isRenderNode])

  React.useEffect(() => {
    return () => {
      if (animationRef.current) {
        animationRef.current.cancel()
      }
    }
  }, [])

  if (!isRenderNode) return null

  return React.cloneElement<any>(children, {
    className: clsx(children.props.className, { 'animation-running': !animationFinished }),
    style: {
      visibility: 'hidden', // 防止动画重叠
      ...children.props.style,
    },
    ref: (el: any) => {
      nodeRef.current = el
      if (typeof proxyRef === 'function') {
        proxyRef(el)
      } else if (proxyRef) {
        proxyRef.current = el
      }
    },
  })
}

function createAnimation(
  el: HTMLElement,
  // config?: TransitionConfig,
  animationType?: AnimationTypes | TransitionConfig,
  type: 'enter' | 'leave' = 'enter',
  options?: KeyframeEffectOptions
): Animation | void {
  if (animationType === false) return

  const config = typeof animationType === 'string' ? animationTypes[animationType] : animationType

  if (typeof config === 'object') {
    const item = config[type]
    const mergedOptions = { ...config.options, ...options }

    if (typeof item === 'function') {
      const res = item(el, mergedOptions)
      if (!res?.keyframes) return
      return new Animation(new KeyframeEffect(el, res.keyframes, { ...mergedOptions, ...res.options }))
    } else if (typeof item === 'object') {
      return new Animation(new KeyframeEffect(el, item.keyframes, { ...item.options, ...mergedOptions }))
    }
  } else {
    console.warn('createAnimation Error: invalid animationConfig', { animationType, config })
  }
}
