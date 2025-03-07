export function getShadowClassName(shadow: boolean | BaseSizeLevel): string | null {
  if (shadow === true) {
    return 'shadow-md'
  }

  if (typeof shadow === 'string') {
    return `shadow-${shadow}`
  }

  return null
}

export type BorderLineType = 'rect' | 'left' | 'right' | 'top' | 'bottom'

export function getBorderClassName(
  border: boolean | number,
  borderType?: BorderLineType,
  isSplit?: boolean,
  isDashed?: boolean
): string | null {
  if (!border) {
    return null
  }

  let className = 'border'
  const borderTypeH = borderType || 'rect'
  const borderWidth = typeof border === 'number' ? border : 1

  if (isSplit) {
    className += ' split'
  }

  if (isDashed) {
    className += ' dashed'
  }

  return className + ` ${borderTypeH}-${borderWidth}`
}

export function getFooterAlignClassName(type: 'left' | 'center' | 'right'): string | null {
  switch (type) {
    case 'center':
      return 'center-h'

    case 'right':
      return 'end-h'

    case 'left':
    default:
      return null
  }
}

export type BasePositionType = 'top' | 'bottom' | 'left' | 'right'

/** 获取相反方向 */
export function getOppositePosition(position: BasePositionType): BasePositionType {
  switch (position) {
    case 'top':
      return 'bottom'

    case 'bottom':
      return 'top'

    case 'left':
      return 'right'

    case 'right':
      return 'left'
  }
}

export type ExPositionType = `${BasePositionType}-${BasePositionType}`

/** 获取相反方向 EX */
export function getOppositePositionEx(position: ExPositionType): ExPositionType {
  const [p1, p2] = position.split('-') as [BasePositionType, BasePositionType]
  return `${getOppositePosition(p1)}-${getOppositePosition(p2)}`
}
