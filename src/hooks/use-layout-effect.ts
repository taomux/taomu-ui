import * as React from 'react'

export const useLayoutEffect = (callback: (mount: boolean) => void | VoidFunction, deps?: React.DependencyList) => {
  const firstMountRef = React.useRef(true)

  React.useLayoutEffect(() => {
    return callback(firstMountRef.current)
  }, deps)

  // We tell react that first mount has passed
  React.useLayoutEffect(() => {
    firstMountRef.current = false
    return () => {
      firstMountRef.current = true
    }
  }, [])
}

export const useLayoutUpdateEffect: typeof React.useEffect = (callback, deps) => {
  useLayoutEffect((firstMount) => {
    if (!firstMount) {
      return callback()
    }
  }, deps)
}
