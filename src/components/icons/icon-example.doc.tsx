import React from 'react'
import { IconSun as IconSun_ } from '.'

interface IconProps extends React.SVGAttributes<SVGElement> {
  /** 图标颜色 */
  color?: string
  /** 图标尺寸 */
  size?: number
}

export const IconSun: React.FC<IconProps> = (props) => {
  return <IconSun_ {...props} />
}
