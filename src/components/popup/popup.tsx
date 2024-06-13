import React from 'react'

import { useTaomuClassName, useInlineStyle } from '../../hooks'
import { popupStyled, PopupCssVars } from './popup.styled'

export interface PopupProps extends ReactBaseType<PopupCssVars> {}

export const Popup: React.FC<PopupProps> = ({ className, cssVars, style, ...wrapProps }) => {
  const popupClassName = useTaomuClassName('popup', className)
  const popupStyle = useInlineStyle<PopupCssVars>(cssVars, style)

  return (
    <div className={popupClassName} style={popupStyle} css={popupStyled} {...wrapProps}>
      <p>component popup is created</p>
    </div>
  )
}
