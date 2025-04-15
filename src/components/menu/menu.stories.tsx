import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { IconActivity, IconAlertCircle, IconAlertTriangle, IconAlignLeft, IconSave } from '../icons'
import { Button } from '../button'
import { Menu, MenuItemKey } from '.'
import { MenuItemProps } from './menu-item'
import { PopupTrigger } from '../popup'

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof meta>
export default meta

const testMenus: MenuItemProps[] = [
  { name: 'menu1', icon: <IconActivity size={16} />, label: '选项1' },
  { name: 'menu2', icon: <IconAlertCircle size={16} />, label: '选项2' },
  { name: 'menu3', icon: <IconAlertTriangle size={16} />, label: '选项3', disabled: true },
  { name: 'menu4', icon: <IconAlignLeft size={16} />, label: '选项4' },
  { name: 'menu5', icon: <IconSave size={16} />, label: '选项5' },
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
    defaultIndexes: [1],
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

/**
 * 使用 `beforeItemRender` 函数为菜单项添加包裹层
 */
export const beforeItemRender: Story = {
  args: {
    items: testMenus,
    mode: 'radio',
    styleMode: 'windows',
    width: 200,
    defaultKeys: 'menu2',
    beforeItemRender: (itemNode: any, props: any) => {
      if (props.disabled) return itemNode
      return (
        <PopupTrigger
          key={props.name}
          trigger="hover"
          position="right"
          content={() => <div className="px-16 py-8 bg-background shadow-md border rect-1 split br-8 ml-12">{props.label}</div>}
        >
          {itemNode}
        </PopupTrigger>
      )
    },
  },
}

export const 额外元素: Story = {
  args: {
    items: testMenus,
    mode: 'radio',
    styleMode: 'windows',
    width: 200,
    defaultIndexes: [1],
    children: (
      <div>
        <Button dashed block>
          Add
        </Button>
      </div>
    ),
  },
}

export const 受控模式_Index: Story = {
  args: {
    items: testMenus,
    mode: 'radio',
    styleMode: 'windows',
    width: 200,
    defaultIndexes: [1],
  },

  render: (args) => {
    const [activeIndexes, setActiveIndexes] = React.useState<number | number[]>(args.defaultIndexes)
    return (
      <div className="flex col gap-12">
        <div className="flex gap-12">
          <Button onClick={() => setActiveIndexes([0])}>选中第一个</Button>
          <Button onClick={() => setActiveIndexes([1])}>选中第二个</Button>
        </div>
        <Menu {...args} activeIndexes={activeIndexes} onChange={(_, indexes) => setActiveIndexes(indexes)} />
      </div>
    )
  },
}

export const 受控模式_Keys: Story = {
  args: {
    items: testMenus,
    mode: 'radio',
    styleMode: 'windows',
    width: 200,
    defaultKeys: ['menu2'],
  },

  render: (args) => {
    const [activeKeys, setActiveKeys] = React.useState<MenuItemKey | MenuItemKey[]>(args.defaultKeys)
    return (
      <div className="flex col gap-12">
        <div className="flex gap-12">
          <Button onClick={() => setActiveKeys('menu1')}>选中第一个</Button>
          <Button onClick={() => setActiveKeys('menu2')}>选中第二个</Button>
        </div>
        <Menu {...args} activeKeys={activeKeys} onChange={(keys) => setActiveKeys(keys)} />
      </div>
    )
  },
}
