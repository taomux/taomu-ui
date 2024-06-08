import React from 'react'

import { useTaomuClassName, useInlineStyle } from '../../hooks'
import { loadingStyled } from './loading.styled'

export interface LoadingProps extends Omit<ReactBaseType, 'onClick'> {
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
  size = 26,
  color,
  weight = 3,
  speed = 0.8,
  ...wrapProps
}) => {
  const loadingClassName = useTaomuClassName('loading', className)
  const loadingStyle = useInlineStyle(cssVars, style)

  const r = size / 2 - 2
  const offset = weight / 2 + 4
  let sizeH = size + offset

  return (
    <svg
      {...wrapProps}
      className={loadingClassName}
      style={loadingStyle}
      css={loadingStyled}
      stroke={color}
      width={size}
      height={size}
      viewBox={`-${offset} -${offset} ${sizeH} ${sizeH}`}
    >
      <g fill="none" fillRule="evenodd">
        <g strokeWidth={weight}>
          <circle strokeOpacity=".25" cx={r} cy={r} r={r} />
          <path d={`M${r * 2} ${r}c0-${r / 1.8}-${r / 2}-${r}-${r}-${r}`}>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`0 ${r} ${r}`}
              to={`360 ${r} ${r}`}
              dur={`${speed}s`}
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
  )
}
