import React from 'react'
import { IconSun } from '.'

interface IconProps extends React.SVGAttributes<SVGElement> {
  /** 图标颜色 */
  color?: string
  /** 图标尺寸 */
  size?: number
}

export const IconExample: React.FC<IconProps> = (props) => {
  return <IconSun {...props} />
}
