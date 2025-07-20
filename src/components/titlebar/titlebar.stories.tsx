import type { Meta, StoryObj } from '@storybook/react-vite'

import { Titlebar } from './titlebar'

const meta: Meta<typeof Titlebar> = {
  title: 'Components/Titlebar',
  component: Titlebar,
  tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof meta>
export default meta

export const 基础示例: Story = {
  args: {},
}
