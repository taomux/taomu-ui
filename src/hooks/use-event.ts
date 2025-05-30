import * as React from 'react'

export function useEvent<T extends Function>(callback?: T): T {
  const fnRef = React.useRef<any>(undefined)
  fnRef.current = callback

  const memoFn = React.useCallback<T>(((...args: any) => fnRef.current?.(...args)) as any, [])

  return memoFn
}
