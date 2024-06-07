import type { Meta, StoryObj } from '@storybook/react'

import { TaomuProvider } from './taomu-provider'

const meta: Meta<typeof TaomuProvider> = {
  title: 'Components/TaomuProvider',
  component: TaomuProvider,
  tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof meta>
export default meta

export const 基础示例: Story = {
  args: {},
}
