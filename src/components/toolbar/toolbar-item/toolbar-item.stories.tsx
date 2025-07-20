import type { Meta, StoryObj } from '@storybook/react-vite'

import { ToolbarItem } from './toolbar-item'

const meta: Meta<typeof ToolbarItem> = {
  title: 'Components/Toolbar/ToolbarItem',
  component: ToolbarItem,
  tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof meta>
export default meta

export const 基础示例: Story = {
  args: {},
}
