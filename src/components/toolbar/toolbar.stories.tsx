import type { Meta, StoryObj } from '@storybook/react'

import { Toolbar } from './toolbar'

const meta: Meta<typeof Toolbar> = {
  title: 'Components/Toolbar',
  component: Toolbar,
  tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof meta>
export default meta

export const 基础示例: Story = {
  args: {
    items: [
      {
        children: 'item1',
      },
    ],
  },
}
