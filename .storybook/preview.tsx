import React from 'react'
import type { Preview, Decorator } from '@storybook/react'

import { TaomuProvider } from '../src'

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

export const decorators: Decorator[] = [
  (Story) => {
    return (
      <TaomuProvider>
        <Story />
      </TaomuProvider>
    )
  },
]

export default preview
