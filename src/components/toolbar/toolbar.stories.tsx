import type { Meta, StoryObj } from '@storybook/react'

import { IconActivity, IconAlertCircle, IconAlertTriangle, IconAlignLeft, IconSave } from '../icons'
import { Toolbar, ToolbarProps } from './toolbar'

const meta: Meta<typeof Toolbar> = {
  title: 'Components/Toolbar',
  component: Toolbar,
  tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof meta>
export default meta

const testItems: ToolbarProps['items'] = [
  { icon: <IconActivity size={16} />, label: '选项1' },
  { icon: <IconAlertCircle size={16} />, label: '选项2' },
  { icon: <IconAlertTriangle size={16} />, label: '选项3' },
  { icon: <IconAlignLeft size={16} />, label: '选项4' },
  { icon: <IconSave size={16} />, label: '选项5' },
]

export const 基础示例: Story = {
  args: {
    mode: 'radio',
    items: testItems,
  },
}

export const 纵向排列: Story = {
  args: {
    direction: 'vertical',
    items: testItems,
  },
}
