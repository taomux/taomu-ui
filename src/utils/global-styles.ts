import { css } from '@emotion/react'
import { mapInlineCssVars } from 'taomu-toolkit'

const globalCssVars: Record<string, string> = {
  colorPrimary: '#1ea7fd',
}

export function getGlobalStyled() {
  return css`
    :root {
      --color-primary: ${globalCssVars.colorPrimary};
    }
  `
}
