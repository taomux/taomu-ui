import React from 'react'

import { useTaomuClassName, useInlineStyle } from '../../hooks'
import { loadingStyled, LoadingCssVars } from './loading.styled'

export interface LoadingProps extends BaseComponentType<LoadingCssVars> {
  /** 大小 默认 26 */
  size?: number
  /** 线条宽度 默认 3 */
  weight?: number
  /** 颜色 */
  color?: string
  /** 旋转速度，x秒/圈 数值越小越快，默认0.8 */
  speed?: number
}

export const Loading: React.FC<LoadingProps> = ({
  className,
  cssVars,
  style,
  size = 24,
  color,
  weight = 3,
  speed = 0.8,
  ...wrapProps
}) => {
  const loadingClassName = useTaomuClassName('loading', className)
  const loadingStyle = useInlineStyle(
    { loadingColor: color, loadingSize: size, loadingWeight: weight, loadingSpeed: `${speed}s`, ...cssVars },
    style
  )

  return <div className={loadingClassName} style={loadingStyle} css={loadingStyled} {...wrapProps} />
}
