import type { Meta, StoryObj } from '@storybook/react-vite'

import { IconSun, IconActivity, IconAlertCircle } from '../icons'
import { Toolbar, ToolbarItemProps } from './'

const meta: Meta<typeof Toolbar> = {
  title: 'Components/Toolbar',
  component: Toolbar,
  tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof meta>
export default meta

const items: ToolbarItemProps[] = [
  { icon: <IconSun />, tooltip: 'item1' },
  { icon: <IconActivity />, tooltip: 'item2' },
  { icon: <IconAlertCircle />, tooltip: 'item3' },
]

export const 基础示例: Story = {
  args: {
    padding: 8,
    fixed: true,
    position: 'left',
    items,
  },
}

export const 左侧: Story = {
  args: {
    padding: 8,
    fixed: true,
    position: 'left',
    items,
    width: 58,
  },
}

export const 右侧: Story = {
  args: {
    padding: 8,
    fixed: true,
    position: 'right',
    items,
    width: 58,
  },
}

export const 顶部: Story = {
  args: {
    padding: 8,
    fixed: true,
    position: 'top',
    items,
    width: 58,
  },
}

export const 底部: Story = {
  args: {
    padding: 8,
    fixed: true,
    position: 'bottom',
    items,
    width: 58,
  },
}

export const 额外样式: Story = {
  args: {
    padding: 8,
    fixed: true,
    position: 'left',
    items,
    shadow: true,
    bordered: true,
    defaultItemProps: { tooltipOffset: 8 },
  },
}
