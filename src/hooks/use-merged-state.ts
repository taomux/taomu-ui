import { useEvent } from './use-event'
import { useLayoutUpdateEffect } from './use-layout-effect'
import { useSafeState } from './use-safe-state'

type Updater<T> = (updater: T | ((origin: T) => T), ignoreDestroy?: boolean) => void

/** We only think `undefined` is empty */
function hasValue(value: any) {
  return value !== undefined
}

/**
 * Similar to `useSafeState` but will use props value if provided.
 * Note that internal use rc-util `useSafeState` hook.
 *
 * @source https://github.com/react-component/util/blob/master/src/hooks/useMergedState.ts
 */
export function useMergedState<T, R = T>(
  defaultStateValue: T | (() => T),
  option?: {
    defaultValue?: T | (() => T)
    value?: T
    onChange?: (value: T, prevValue: T) => void
    postState?: (value: T) => T
  }
): [R, Updater<T>] {
  const { defaultValue, value, onChange, postState } = option || {}

  // ======================= Init =======================
  const [innerValue, setInnerValue] = useSafeState<T>(() => {
    if (hasValue(value)) {
      return value
    } else if (hasValue(defaultValue)) {
      return typeof defaultValue === 'function' ? (defaultValue as any)() : defaultValue
    } else {
      return typeof defaultStateValue === 'function' ? (defaultStateValue as any)() : defaultStateValue
    }
  })

  const mergedValue = value !== undefined ? value : innerValue
  const postMergedValue = postState ? postState(mergedValue) : mergedValue

  // ====================== Change ======================
  const onChangeFn = useEvent(onChange)

  const [prevValue, setPrevValue] = useSafeState<[T]>([mergedValue])

  useLayoutUpdateEffect(() => {
    const prev = prevValue[0]
    if (innerValue !== prev) {
      onChangeFn(innerValue, prev)
    }
  }, [prevValue])

  // Sync value back to `undefined` when it from control to un-control
  useLayoutUpdateEffect(() => {
    if (!hasValue(value)) {
      setInnerValue(value!)
    }
  }, [value])

  // ====================== Update ======================
  const triggerChange: Updater<T> = useEvent((updater, ignoreDestroy) => {
    setInnerValue(updater, ignoreDestroy)
    setPrevValue([mergedValue], ignoreDestroy)
  })

  return [postMergedValue as unknown as R, triggerChange]
}
