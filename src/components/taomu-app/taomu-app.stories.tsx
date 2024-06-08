import type { Meta, StoryObj } from '@storybook/react'

import { TaomuApp } from './taomu-app'

const meta: Meta<typeof TaomuApp> = {
  title: 'Components/TaomuApp',
  component: TaomuApp,
  tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof meta>
export default meta

export const 基础示例: Story = {
  args: {},
}
