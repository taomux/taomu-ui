import React from 'react'

import { mapTaomuInlineCssVars } from '../styles'

export function useInlineStyle<T extends object>(cssVars?: T, ...styles: (React.CSSProperties | void)[]) {
  return React.useMemo(() => {
    return Object.assign(mapTaomuInlineCssVars(cssVars), ...styles)
  }, [cssVars, styles])
}
