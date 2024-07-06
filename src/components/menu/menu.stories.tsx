import type { Meta, StoryObj } from '@storybook/react'

import { IconActivity } from '../icons'
import { Menu } from './menu'

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof meta>
export default meta

export const 基础示例: Story = {
  args: {
    width: 200,
    items: [
      {
        label: '菜单1',
        onClick: () => {
          alert(1)
        },
      },
      { label: '菜单2' },
      { label: '菜单-禁用', disabled: true, onClick: () => alert(3) },
      { label: '菜单-选中', active: true },
      { label: '菜单-选中-禁用', active: true, disabled: true },
      { label: '菜单3' },
      { label: '不可见', visible: false },
      { divider: true },
      { label: '自定义属性' },
      { label: '自定义图标', icon: <IconActivity size={16} /> },
      { label: '超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本' },
      {
        label: '超出省略超出省略超出省略超出省略超出省略超出省略超出省略超出省略',
        ellipsis: true,
        title: '超出省略 hover title 需要手动传入',
      },
    ],
  },
}

export const 固定高度: Story = {
  args: {
    width: 200,
    height: 120,
    items: [
      {
        label: '菜单1',
        onClick: () => {
          alert(1)
        },
      },
      { label: '菜单2' },
      { label: '菜单-禁用', disabled: true, onClick: () => alert(3) },
      { label: '菜单3' },
      { divider: true },
      { label: '自定义属性' },
      { label: '自定义图标', icon: '+' },
    ],
  },
}

export const 边距和间距: Story = {
  args: {
    width: 200,
    padding: 0,
    gap: 0,
    itemProps: { radius: 0 },
    items: [
      { label: '菜单1' },
      { label: '菜单2' },
      { label: '菜单-禁用', disabled: true, onClick: () => alert(3) },
      { label: '菜单3' },
      { divider: true },
      { label: '自定义属性' },
      { label: '自定义图标', icon: '+' },
    ],
  },
}
