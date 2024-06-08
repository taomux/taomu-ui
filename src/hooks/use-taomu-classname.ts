import React from 'react'
import clsx, { type ClassValue } from 'clsx'

import { TAOMU_PREFIX } from '../styles'

export function useTaomuClassName(mainClassName: string, ...restClassNames: ClassValue[]) {
  return React.useMemo(() => {
    return clsx(`${TAOMU_PREFIX}-${mainClassName}`, restClassNames)
  }, restClassNames)
}
