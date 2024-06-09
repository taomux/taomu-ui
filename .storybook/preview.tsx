import React from 'react'
import type { Preview, Decorator } from '@storybook/react'
import { Global, css } from '@emotion/react'

import { TaomuApp, linkCssVar } from '../src'
import './toolbar'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

const storybookStyled = css`
  .sbdocs .docs-story {
    background-color: ${linkCssVar('colorBackground')};
  }
`

export const decorators: Decorator[] = [
  (Story) => {
    return (
      <TaomuApp>
        <Global styles={storybookStyled} />
        <Story />
      </TaomuApp>
    )
  },
]

export default preview
