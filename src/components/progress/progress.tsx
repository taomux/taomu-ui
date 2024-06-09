import React from 'react'
import clsx from 'clsx'

import { useTaomuClassName, useInlineStyle } from '../../hooks'
import { progressStyled, ProgressCssVars } from './progress.styled'

export type ProgressBarType = 'default' | 'info' | 'success' | 'warning' | 'error' | 'gray'

export interface ProgressProps extends ReactBaseType<ProgressCssVars> {
  /** 类型 */
  type?: ProgressBarType
  /** 进度百分比，0 - 100 */
  progress?: number
  /** 进度条宽度 */
  width?: string | number
  /** 进度条高度 */
  height?: string | number
  /** 进度条圆角 */
  radius?: string | number
  /** 进度条颜色 */
  color?: string
  /** 带条纹 */
  striped?: boolean
  /** 条纹是否反转 */
  stripedReverse?: boolean
  /** 条纹动画反转 */
  stripedAnimationReverse?: boolean
  /** 条纹动画, 默认开启，仅在 striped 为 true 时生效 */
  animated?: boolean
  /** 启用过渡动画 */
  transition?: boolean
}

/**
 * 进度条
 *
 */
export const Progress: React.FC<ProgressProps> = ({
  children,
  className,
  cssVars,
  style,
  width = '100%',
  height = 18,
  radius,
  color,
  striped,
  stripedReverse,
  stripedAnimationReverse,
  animated = true,
  transition = true,
  progress = 0,
  type = 'primary',
  ...wrapProps
}) => {
  const progressClassName = useTaomuClassName(
    'progress',
    `progress-${type}`,
    {
      'striped-reverse': stripedReverse,
      'striped-animation-reverse': stripedAnimationReverse,
      'progress-transition': transition,
    },
    className
  )
  const progressStyle = useInlineStyle(
    {
      progressWidth: width,
      progressHeight: height,
      progressRadius: radius,
      progressColor: color,
      ...cssVars,
    },
    style
  )

  return (
    <div className={progressClassName} style={progressStyle} css={progressStyled} {...wrapProps}>
      <div
        className={clsx('progress-bar', {
          striped,
          animated: striped && animated,
        })}
        style={{ width: `${progress}%` }}
      ></div>
      {children && <div className="relative flex center fs-12 full-screen">{children}</div>}
    </div>
  )
}
