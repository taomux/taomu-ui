import type { Meta, StoryObj } from '@storybook/react'

import { SwitchText } from './switch-text'

const meta: Meta<typeof SwitchText> = {
  title: 'Components/Switch/SwitchText',
  component: SwitchText,
  tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof meta>
export default meta

export const 基础示例: Story = {
  args: {},
}
