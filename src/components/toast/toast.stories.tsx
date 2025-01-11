import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import { Toast, openToast } from './'

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
      <div>
        <Button onClick={() => openToast({ message: 'hello' })}>open</Button>
      </div>
    )
  },
}
