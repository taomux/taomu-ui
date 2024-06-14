import React from 'react'

import { useTaomuClassName, useInlineStyle } from '../../hooks'
import { portalStyled, PortalCssVars } from './portal.styled'

export interface PortalProps extends ReactBaseType<PortalCssVars> {}

export const Portal: React.FC<PortalProps> = ({ className, cssVars, style, ...wrapProps }) => {
  const portalClassName = useTaomuClassName('portal', className)
  const portalStyle = useInlineStyle<PortalCssVars>(cssVars, style)

  return (
    <div className={portalClassName} style={portalStyle} css={portalStyled} {...wrapProps}>
      <p>component portal is created</p>
    </div>
  )
}
