import type { Meta, StoryObj } from '@storybook/react-vite'

import { Dropdown } from './dropdown'

import { Button } from '../button'

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof meta>
export default meta

const menuConfig = [
  {
    label: '菜单1',
    onClick: () => {
      alert(1)
    },
  },
  { label: '菜单2' },
  { label: '菜单-禁用', disabled: true },
  { label: '菜单3' },
]

export const 基础示例: Story = {
  args: {
    menus: menuConfig,
    children: <Button>下拉菜单</Button>,
  },
}

export const 弹出层与触发器等宽: Story = {
  args: {
    equalWidth: 'equal',
    menus: [
      ...menuConfig,
      {
        label: '菜单4菜单4菜单4菜单4菜单4菜单4菜单4',
      },
    ],
    children: <Button>下拉菜单下拉菜单下拉菜单下拉菜单</Button>,
  },
}

export const 等宽_最大宽度: Story = {
  args: {
    equalWidth: 'max-width',
    children: <Button>下拉菜单下拉菜单下拉菜单下拉菜单</Button>,
  },

  render: ({ menuProps, ...args }) => {
    return (
      <div className="flex gap-12">
        <Dropdown menus={menuConfig} {...args} />
        <Dropdown
          menus={[
            ...menuConfig,
            {
              label: '菜单4菜单4菜单4菜单4菜单4菜单4菜单4',
            },
          ]}
          {...args}
        />
      </div>
    )
  },
}

export const 等宽_最小宽度: Story = {
  args: {
    equalWidth: 'min-width',
    children: <Button>下拉菜单下拉菜单下拉菜单下拉菜单</Button>,
  },

  render: ({ menuProps, ...args }) => {
    return (
      <div className="flex gap-12">
        <Dropdown menus={menuConfig} {...args} />
        <Dropdown
          menus={[
            ...menuConfig,
            {
              label: '菜单4菜单4菜单4菜单4菜单4菜单4菜单4',
            },
          ]}
          {...args}
        />
        <div className="flex-1"></div>
        <Dropdown {...args} position="bottom-right" menuProps={{ items: menuConfig }} {...args} />
      </div>
    )
  },
}

export const Hover: Story = {
  args: {
    trigger: 'hover',
    menuProps: { items: menuConfig },
  },
  render: ({ ...args }) => {
    return (
      <div className="flex gap-12 center-v">
        <Dropdown {...args}>
          <Button>Hover Me</Button>
        </Dropdown>
        <Dropdown {...args}>
          <a href="##">Hover Me</a>
        </Dropdown>
      </div>
    )
  },
}

/**
 * 通过 position 来控制弹出方向
 *
 * 继承自 PopupTrigger
 */
export const 弹出方向: Story = {
  args: {
    trigger: 'hover',
    position: 'right-center',
    menuProps: { items: menuConfig },
  },
  render: (args) => {
    return (
      <div className="flex rpw gap-12 flex-wrap p-48 mb-48">
        <Dropdown {...args} position="top">
          <Button>Top</Button>
        </Dropdown>
        <Dropdown {...args} position="top-center">
          <Button>TopCenter</Button>
        </Dropdown>
        <Dropdown {...args} position="top-left">
          <Button>TopLeft</Button>
        </Dropdown>
        <Dropdown {...args} position="top-right">
          <Button>TopRight</Button>
        </Dropdown>
        <Dropdown {...args} position="bottom">
          <Button>Bottom</Button>
        </Dropdown>
        <Dropdown {...args} position="bottom-center">
          <Button>BottomCenter</Button>
        </Dropdown>
        <Dropdown {...args} position="bottom-left">
          <Button>BottomLeft</Button>
        </Dropdown>
        <Dropdown {...args} position="bottom-right">
          <Button>BottomRight</Button>
        </Dropdown>
        <Dropdown {...args} position="left">
          <Button>Left</Button>
        </Dropdown>
        <Dropdown {...args} position="left-center">
          <Button>LeftCenter</Button>
        </Dropdown>
        <Dropdown {...args} position="left-top">
          <Button>LeftTop</Button>
        </Dropdown>
        <Dropdown {...args} position="left-bottom">
          <Button>LeftBottom</Button>
        </Dropdown>
        <Dropdown {...args} position="right">
          <Button>Right</Button>
        </Dropdown>
        <Dropdown {...args} position="right-center">
          <Button>RightCenter</Button>
        </Dropdown>
        <Dropdown {...args} position="right-top">
          <Button>RightTop</Button>
        </Dropdown>
        <Dropdown {...args} position="right-bottom">
          <Button>RightBottom</Button>
        </Dropdown>
      </div>
    )
  },
}
