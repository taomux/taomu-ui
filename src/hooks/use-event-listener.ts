import React from 'react'

// export function useEventListener<Target extends EventTarget, K extends string, EventMap extends Record<K, any>>(
//   target: Target,
//   type: K,
//   listener?: (this: Target, ev: EventMap[K]) => any,
//   options?: boolean | AddEventListenerOptions
// ) {
//   const listenerRef = React.useRef(listener)
//   listenerRef.current = listener

//   React.useEffect(() => {
//     if (!listenerRef.current) return // 允许传入空，为了在特定状态下移除事件

//     function register(this: Target, e: EventMap[K]) {
//       listenerRef.current?.call(this, e)
//     }

//     target.addEventListener(type, register, options)
//     return () => {
//       target.removeEventListener(type, register, options)
//     }
//   }, [])
// }

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

// export function useEventListener<K extends keyof HTMLElementEventMap>(
//   target: HTMLElement,
//   type: K,
//   listener?: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
//   deps: React.DependencyList = [],
//   options?: boolean | AddEventListenerOptions
// ) {
//   const listenerRef = React.useRef(listener)
//   listenerRef.current = listener

//   React.useEffect(() => {
//     if (!listenerRef.current) return

//     function register(this: HTMLElement, e: HTMLElementEventMap[K]) {
//       listenerRef.current?.call(this, e)
//     }

//     target.addEventListener(type, register, options)
//     return () => {
//       target.removeEventListener(type, register, options)
//     }
//   }, deps)
// }

// export function useDocumentEventListener<K extends keyof DocumentEventMap>(
//   type: K,
//   listener?: (this: Document, ev: DocumentEventMap[K]) => any,
//   deps: React.DependencyList = [],
//   options?: boolean | AddEventListenerOptions
// ) {
//   const listenerRef = React.useRef(listener)
//   listenerRef.current = listener

//   React.useEffect(() => {
//     if (!listenerRef.current) return // 允许传入空，为了在特定状态下移除事件

//     function register(this: Document, e: DocumentEventMap[K]) {
//       listenerRef.current?.call(this, e)
//     }

//     document.addEventListener(type, register, options)
//     return () => {
//       document.removeEventListener(type, register, options)
//     }
//   }, deps)
// }

// export function useWindowEventListener<K extends keyof WindowEventMap>(
//   type: K,
//   listener?: (this: Window, ev: WindowEventMap[K]) => any,
//   deps: React.DependencyList = [],
//   options?: boolean | AddEventListenerOptions
// ) {
//   const listenerRef = React.useRef(listener)
//   listenerRef.current = listener

//   React.useEffect(() => {
//     if (!listenerRef.current) return

//     function register(this: Window, e: WindowEventMap[K]) {
//       listenerRef.current?.call(this, e)
//     }

//     window.addEventListener(type, register, options)
//     return () => {
//       window.removeEventListener(type, register, options)
//     }
//   }, deps)
// }

// export function useRefEventListener<K extends keyof HTMLElementEventMap>(
//   targetRef: React.RefObject<HTMLElement>,
//   type: K,
//   listener?: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
//   deps: React.DependencyList = [],
//   options?: boolean | AddEventListenerOptions
// ) {
//   const listenerRef = React.useRef(listener)
//   listenerRef.current = listener

//   React.useEffect(() => {
//     if (!listenerRef.current) return

//     function register(this: HTMLElement, e: HTMLElementEventMap[K]) {
//       listenerRef.current?.call(this, e)
//     }

//     targetRef.current?.addEventListener(type, register, options)
//     return () => {
//       targetRef.current?.removeEventListener(type, register, options)
//     }
//   }, deps)
// }
