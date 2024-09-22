import type { Meta, StoryObj } from '@storybook/react'

import { IconActivity, IconAlertCircle, IconAlertTriangle, IconAlignLeft, IconSave } from '../icons'
import { Menu } from './menu'
import { MenuItemProps } from './menu-item'

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof meta>
export default meta

const testMenus: MenuItemProps[] = [
  { key: 'menu1', icon: <IconActivity size={16} />, label: '选项1' },
  { key: 'menu2', icon: <IconAlertCircle size={16} />, label: '选项2' },
  { key: 'menu3', icon: <IconAlertTriangle size={16} />, label: '选项3', disabled: true },
  { key: 'menu4', icon: <IconAlignLeft size={16} />, label: '选项4' },
  { key: 'menu5', icon: <IconSave size={16} />, label: '选项5' },
]

const testMenus2: MenuItemProps[] = [
  { label: '菜单1', onClick: () => console.log('onClick 1') },
  { label: '菜单2' },
  { label: '菜单-禁用', disabled: true, onClick: () => console.log('onClick 3') },
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
]

export const 基础示例: Story = {
  args: {
    width: 200,
    items: testMenus2,
  },
}

export const 固定高度: Story = {
  args: {
    width: 200,
    height: 120,
    items: testMenus2,
  },
}

export const 边距和间距: Story = {
  args: {
    width: 200,
    padding: 0,
    gap: 0,
    itemProps: { radius: 0 },
    items: testMenus2,
  },
}

export const 横向排列: Story = {
  args: {
    items: testMenus,
    direction: 'horizontal',
  },
}

/** Default */
export const 横向排列_超出滚动: Story = {
  args: {
    items: testMenus,
    direction: 'horizontal',
    width: 300,
  },
}

export const 横向排列_超出换行: Story = {
  args: {
    items: testMenus,
    direction: 'horizontal',
    width: 300,
    overflowBreak: true,
  },
}

export const 单选模式: Story = {
  args: {
    items: testMenus,
    mode: 'radio',
  },
}

export const 多选模式: Story = {
  args: {
    items: testMenus,
    mode: 'checkbox',
    width: 200,
  },
}

export const Windows风格: Story = {
  args: {
    items: testMenus,
    mode: 'radio',
    styleMode: 'windows',
    width: 200,
    defaultIndex: [1],
  },
}

export const Windows风格_仅图标: Story = {
  args: {
    items: testMenus.map((item) => ({ icon: item.icon })),
    mode: 'radio',
    styleMode: 'windows',
  },
}

export const Windows风格_横向: Story = {
  args: {
    items: testMenus,
    mode: 'radio',
    styleMode: 'windows',
    direction: 'horizontal',
  },
}

export const Windows风格_横向_仅图标: Story = {
  args: {
    items: testMenus.map((item) => ({ icon: item.icon })),
    mode: 'radio',
    styleMode: 'windows',
    direction: 'horizontal',
  },
}

export const Windows风格_多选: Story = {
  args: {
    items: testMenus,
    mode: 'checkbox',
    styleMode: 'windows',
    width: 200,
  },
}

export const 精简模式: Story = {
  args: {
    items: testMenus,
    mode: 'radio',
    styleMode: 'windows',
    width: 200,
    defaultIndex: [1],
  },
}
