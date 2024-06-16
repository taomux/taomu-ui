import React from 'react'

type GetEventType<T extends HTMLElement | Window | Document> = T extends HTMLElement
  ? HTMLElementEventMap
  : T extends Window
    ? WindowEventMap
    : T extends Document
      ? DocumentEventMap
      : never

export function useEventListener<
  Target extends HTMLElement | Window | Document,
  EventMap extends GetEventType<Target>,
  EventName extends keyof EventMap,
>(
  target: Target,
  type: EventName,
  listener?: (this: Target, ev: EventMap[EventName]) => any,
  deps: React.DependencyList = [],
  options?: boolean | AddEventListenerOptions
) {
  const listenerRef = React.useRef(listener)
  listenerRef.current = listener

  React.useEffect(() => {
    if (!listenerRef.current) return

    function register(this: Target, e: EventMap[EventName]) {
      listenerRef.current?.call(this, e)
    }

    target.addEventListener(type as any, register as any, options)
    return () => {
      target.removeEventListener(type as any, register as any, options)
    }
  }, deps)
}
