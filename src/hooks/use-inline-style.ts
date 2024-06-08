import React from 'react'

import { mapTaomuInlineCssVars } from '../styles'

export function useInlineStyle<T extends object>(cssVars?: T, style?: React.CSSProperties) {
  return React.useMemo(() => {
    return Object.assign(mapTaomuInlineCssVars(cssVars), style)
  }, [cssVars, style])
}
