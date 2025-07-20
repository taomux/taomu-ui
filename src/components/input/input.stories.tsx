import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { IconActivity } from '../icons'
import { Input, InputPassword, InputTextarea } from './'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof meta>
export default meta

export const 基础示例: Story = {
  args: {
    allowClear: true,
    placeholder: '请输入',
  },
}

export const 扩展元素: Story = {
  args: {
    allowClear: true,
    placeholder: '请输入',
    leftNode: <IconActivity size={16} />,
    rightNode: <IconActivity size={16} />,
  },
}

export const 状态: Story = {
  args: {
    allowClear: true,
    leftNode: <IconActivity size={16} />,
    rightNode: <IconActivity size={16} />,
  },

  render: (args) => {
    return (
      <div className="flex col gap-12">
        <Input {...args} status="default" placeholder="default" />
        <Input {...args} status="success" placeholder="success" />
        <Input {...args} status="warning" placeholder="warning" />
        <Input {...args} status="error" placeholder="error" />
      </div>
    )
  },
}

export const 密码输入: Story = {
  render: () => <InputPassword placeholder="InputPassword" maxLength={20} />,
}

export const 多行文本输入: Story = {
  render: () => {
    return (
      <div className="flex col gap-12">
        <InputTextarea width={500} rows={5} placeholder="InputTextarea" />
        <InputTextarea width={500} rows={5} placeholder="success" status="success" />
        <InputTextarea width={500} rows={5} placeholder="warning" status="warning" />
        <InputTextarea width={500} rows={5} placeholder="error" status="error" />
      </div>
    )
  },
}

export const Ref: Story = {
  args: {},

  render: (args) => {
    const inputRef = React.useRef<HTMLInputElement>(null)

    React.useEffect(() => {
      console.log(inputRef)
    }, [])

    return (
      <div className="flex col gap-12">
        <Input {...args} ref={inputRef} />
      </div>
    )
  },
}
