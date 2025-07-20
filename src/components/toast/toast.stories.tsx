import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '../button'
import { Toast, toast } from './'

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof meta>
export default meta

export const 基础示例: Story = {
  args: {},
}

export const 函数打开: Story = {
  render: () => {
    return (
      <div className="flex gap-8">
        <Button onClick={() => toast.openToast({ message: 'hello' })}>open</Button>
        <Button onClick={() => toast.closeAll()}>closeAll</Button>
      </div>
    )
  },
}

export const 消息类型: Story = {
  render: () => {
    return (
      <div className="flex gap-8">
        <Button onClick={() => toast.info('info message')}>info</Button>
        <Button onClick={() => toast.warning('warning message')}>warning</Button>
        <Button onClick={() => toast.success('success message')}>success</Button>
        <Button onClick={() => toast.error('error message')}>error</Button>
        <Button onClick={() => toast.question('error message')}>question</Button>
        <Button onClick={() => toast.loading('loading message')}>loading</Button>
        <Button onClick={() => toast.loading('可以通过设置 popupId: undefined 来禁用')}>loading 默认为单例</Button>
        <Button onClick={() => toast.loading('loading message', { popupId: undefined })}>loading 多例</Button>
      </div>
    )
  },
}

export const 显示关闭按钮: Story = {
  render: () => {
    return (
      <div className="flex gap-8">
        <Button onClick={() => toast.info('info message', { showCloseButton: true })}>info</Button>
        <Button onClick={() => toast.warning('warning message', { showCloseButton: true })}>warning</Button>
        <Button onClick={() => toast.success('success message', { showCloseButton: true })}>success</Button>
        <Button onClick={() => toast.error('error message', { showCloseButton: true })}>error</Button>
        <Button onClick={() => toast.question('error message', { showCloseButton: true })}>question</Button>
        <Button onClick={() => toast.loading('loading message', { showCloseButton: true })}>loading</Button>
      </div>
    )
  },
}
