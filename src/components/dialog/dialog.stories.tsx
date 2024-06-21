import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import { Checkbox } from '../checkbox'
import { Dialog, DialogPortal } from './'

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof meta>
export default meta

export const 基础示例: Story = {
  args: {
    title: 'Title',
    children: 'Content',
  },
}

export const 无头: Story = {
  args: {
    children: 'Content',
  },
}

export const 无脚: Story = {
  args: {
    children: 'Content',
    footer: false,
  },
}

export const 按钮居中: Story = {
  args: {
    title: 'Title',
    children: 'Content',
    footerAlign: 'center',
  },
}

export const 无关闭icon: Story = {
  args: {
    title: 'Title',
    children: 'Content',
    showCloseIcon: false,
  },
}

export const 无外边框: Story = {
  args: {
    title: 'Title',
    children: 'Content',
    outerBorder: false,
  },
}

export const 无分割线: Story = {
  args: {
    title: 'Title',
    children: 'Content',
    splitBorder: false,
  },
}

export const 阴影: Story = {
  args: {
    title: 'Title',
    children: 'Content',
  },
  render: (args) => {
    return (
      <div className="flex col gap-12">
        <Dialog {...args} shadow={false}>
          无
        </Dialog>
        <Dialog {...args} shadow="xs">
          xs
        </Dialog>
        <Dialog {...args} shadow="sm">
          sm
        </Dialog>
        <Dialog {...args}>Default</Dialog>
        <Dialog {...args} shadow="md">
          md
        </Dialog>
        <Dialog {...args} shadow="lg">
          lg
        </Dialog>
        <Dialog {...args} shadow="xl">
          xl
        </Dialog>
      </div>
    )
  },
}

export const 底部元素扩展: Story = {
  args: {
    title: 'Title',
    children: 'Content',
    width: 600,
    beforeFooterNodes: [
      <Checkbox key="checkbox">checkbox</Checkbox>,
      <div key="full" className="flex-1"></div>,
      <Button key="btn-left" type="warning" glass>
        Btn Left
      </Button>,
    ],
    afterFooterNodes: [
      <Button key="btn-right" type="primary" glass>
        Btn Right
      </Button>,
    ],
  },
}

export const 长标题: Story = {
  args: {
    title: 'Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title',
    children: 'Content',
  },
}

export const 函数打开: Story = {
  render() {
    function openDialog() {
      const dialog = new DialogPortal(
        () => {
          return <div>dialog content</div>
        },
        {
          title: 'Title',
          children: 'Content',
        }
      )
      dialog.open()
    }

    return (
      <div>
        <Button onClick={openDialog}>open一个</Button>
      </div>
    )
  },
}
