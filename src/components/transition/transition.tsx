import React from 'react'

import { useTaomuClassName, useInlineStyle } from '../../hooks'
import { transitionStyled, TransitionCssVars } from './transition.styled'

export interface TransitionProps {
  children: React.ReactElement
  /** children 的 ref 代理 */
  proxyRef?: React.MutableRefObject<HTMLElement | null>
  /** 外部控制的状态，决定 children 是否进场 */
  show?: boolean
  /** 内置动画类型 */
  animationType?: ''
  /** 进场动画配置 */
  enter?: KeyframeEffectArgs | KeyframeEffectBuilder
  /** 出场动画配置 */
  exit?: KeyframeEffectArgs | KeyframeEffectBuilder
}

export interface KeyframeEffectArgs {
  keyframes: Keyframe[] | PropertyIndexedKeyframes | null
  options?: number | KeyframeEffectOptions
}

/**
 * 在一个构建函数中创建 [KeyframeEffect](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect)
 */
export type KeyframeEffectBuilder = (el: HTMLElement) => KeyframeEffectArgs | void

export const Transition: React.FC<TransitionProps> = ({ children, proxyRef, show, enter, exit }) => {
  const nodeRef = React.useRef<HTMLElement>(null)
  const [isRenderNode, setIsRenderNode] = React.useState(show)

  React.useEffect(() => {
    if (proxyRef) {
      proxyRef.current = nodeRef.current
    }
  }, [proxyRef, nodeRef.current])

  React.useEffect(() => {
    if (show) {
      setIsRenderNode(true)
    } else {
      if (!nodeRef.current) return
      playAnimation(nodeRef.current, exit, true).then(() => {
        nodeRef.current = null
        setIsRenderNode(false)
      })
    }
  }, [show])

  React.useEffect(() => {
    if (isRenderNode) {
      if (!nodeRef.current) return
      playAnimation(nodeRef.current, enter)
    }
  }, [isRenderNode])

  if (!isRenderNode) return null

  return React.cloneElement(children, { ref: nodeRef })
}

async function playAnimation(el: HTMLElement, config?: KeyframeEffectArgs | KeyframeEffectBuilder, isExit = false) {
  if (!isExit) {
    el.style.visibility = 'visible'
  }

  if (!config) return

  let keyframes: KeyframeEffectArgs['keyframes'] | undefined
  let options: KeyframeEffectArgs['options'] | undefined

  if (typeof config === 'function') {
    const res = config(el)
    if (res) {
      keyframes = res.keyframes
      options = res.options
    }
  } else if (typeof config === 'object') {
    keyframes = config.keyframes
    options = config.options
  }

  if (!keyframes) return

  console.log({ keyframes, options })

  const animation = new Animation(new KeyframeEffect(el, keyframes, options))
  animation.play()

  return new Promise<void>((resolve) => {
    const duration = typeof options === 'number' ? options : options?.duration

    console.log({ duration })

    animation.addEventListener('finish', () => {})

    animation.onfinish = () => {
      if (isExit) {
        el.style.visibility = 'hidden'
      }
      resolve()
    }

    // if (duration) {
    //   setTimeout(() => {
    //     resolve()
    //     // animation.cancel()
    //   }, duration - 30)
    // } else {
    //   animation.onfinish = () => {
    //     resolve()
    //     // animation.cancel()
    //   }
    // }
  })
}
