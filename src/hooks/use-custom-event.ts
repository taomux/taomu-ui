import React from 'react'

// 这里定义全局类型是为了方便类型扩展
declare global {
  /**
   * 自定义事件类型
   *
   * - key: 事件名称
   * - value: 回调函数返回值
   */
  interface CustomEventType {
    /** 子应用路由变更 */
    'taomu://update-global-style'?: void
  }
}

export type CustomEventKeys = keyof CustomEventType

/**
 * 监听自定义事件
 *
 */
export function useCustomEvent<K extends CustomEventKeys>(
  key: K,
  cb?: (e: CustomEvent<CustomEventType[K]>) => void,
  deps: React.DependencyList = []
) {
  const cbRef = React.useRef(cb)

  cbRef.current = cb

  React.useEffect(() => {
    if (!cbRef.current) return

    function register(e: any) {
      cbRef.current?.(e)
    }
    document.addEventListener(key, register)

    return () => {
      document.removeEventListener(key, register)
    }
  }, deps)
}

/**
 * 监听自定义事件，并将事件回调值作为 state 返回
 *
 */
export function useCustomEventWithState<K extends CustomEventKeys, S extends CustomEventType[K]>(
  key: K,
  cb?: (e: CustomEvent<S>) => void,
  initialState?: S,
  deps: React.DependencyList = []
) {
  const [state, setState] = React.useState<S | undefined>(initialState)

  useCustomEvent(
    key,
    (e) => {
      setState(e.detail as S)
      cb?.(e as any)
    },
    deps
  )
  return [state, setState]
}

/**
 * 派发自定义事件
 *
 */
export function dispatchCustomEvent<K extends CustomEventKeys, D extends CustomEventType[K]>(key: K, detail?: D) {
  const event = new CustomEvent(key, {
    detail,
  })
  document.dispatchEvent(event)
  return event
}
