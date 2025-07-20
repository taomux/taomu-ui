import type { Meta, StoryObj } from '@storybook/react-vite'

import { Radio } from './radio'

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof meta>
export default meta

export const 基础示例: Story = {
  args: {
    label: 'Radio',
  },
}
