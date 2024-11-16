import React from 'react'

import { useTaomuClassName, useInlineStyle } from '../../hooks'
import { linkCssVar } from '../../styles'
import { IconMeh } from '../icons'

import { emptyStyled, EmptyCssVars } from './empty.styled'

export interface EmptyProps extends BaseComponentType<EmptyCssVars> {
  image?: React.ReactNode
  text?: boolean | React.ReactNode
}

export const Empty: React.FC<EmptyProps> = ({ className, cssVars, style, image, text, ...wrapProps }) => {
  const emptyClassNames = useTaomuClassName('empty flex col gap-12 center', className)
  const emptyStyle = useInlineStyle<EmptyCssVars>(cssVars, style)

  function renderImage() {
    if (image) return image
    return <IconMeh size={32} color={linkCssVar('colorTextLight')} />
  }

  function renderText() {
    if (text === false) return null
    if (text) return text
    return <span className="fs-14 color-light">空空如也</span>
  }

  return (
    <div className={emptyClassNames} style={emptyStyle} css={emptyStyled} {...wrapProps}>
      {renderImage()}
      {renderText()}
    </div>
  )
}
