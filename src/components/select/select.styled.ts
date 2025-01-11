import { css } from '@emotion/react'

import { initGlobalCssVars } from '../../styles'
import type { InputCssVars } from '../input/input.styled'

export interface SelectCssVars extends InputCssVars {
  //
}

initGlobalCssVars('common', {
  //
})

export const selectStyled = css``

declare global {
  interface GlobalCssVars extends SelectCssVars {}
}
