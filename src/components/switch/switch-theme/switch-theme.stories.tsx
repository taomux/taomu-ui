import type { Meta, StoryObj } from '@storybook/react'

import { SwitchTheme } from './switch-theme'

const meta: Meta<typeof SwitchTheme> = {
  title: 'Components/Switch/SwitchTheme',
  component: SwitchTheme,
  tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof meta>
export default meta

export const 基础示例: Story = {
  args: {},
}
