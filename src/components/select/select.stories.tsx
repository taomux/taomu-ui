import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Select, SelectOptionItem } from './select'

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof meta>
export default meta

export const 基础示例: Story = {
  args: {
    placeholder: '请选择',
    options: [
      { label: '选项1', value: '1' },
      { label: '选项2', value: '2' },
    ],
  },
}

export const 聚焦自动打开: Story = {
  args: {
    placeholder: '请选择',
    openOnFocus: true,
    options: [
      { label: '选项1', value: '1' },
      { label: '选项2', value: '2' },
    ],
  },

  render: (args) => {
    return (
      <div className="grid col-3 gap-12">
        <Select {...args} />
        <Select {...args} />
        <Select {...args} />
        <Select {...args} />
        <Select {...args} />
        <Select {...args} />
      </div>
    )
  },
}

export const 数据刷新: Story = {
  args: {
    placeholder: '请选择',
  },

  render: (args) => {
    const [options, setOptions] = React.useState<SelectOptionItem[]>([])

    React.useEffect(() => {
      let count = 0

      const timer = setInterval(() => {
        setOptions([
          { label: `选项1-${count}`, value: 1 },
          { label: `选项2-${count}`, value: 2 },
        ])
        count++
      }, 1000)

      return () => clearInterval(timer)
    }, [])

    return <Select {...args} options={options} />
  },
}

export const 加载中: Story = {
  args: {
    placeholder: '请选择',
    loading: true,
    options: [
      { label: '选项1', value: '1' },
      { label: '选项2', value: '2' },
    ],
  },
}
