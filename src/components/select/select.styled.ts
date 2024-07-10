import { css } from '@emotion/react'

import { setGlobalCssVars } from '../../styles'
import type { InputCssVars } from '../input/input.styled'

export interface SelectCssVars extends InputCssVars {
  //
}

setGlobalCssVars('common', {
  //
})

export const selectStyled = css``

declare global {
  interface GlobalCssVars extends SelectCssVars {}
}
