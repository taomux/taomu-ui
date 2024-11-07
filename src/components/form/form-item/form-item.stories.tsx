import type { Meta, StoryObj } from '@storybook/react'

import { FormItem } from './form-item'

const meta: Meta<typeof FormItem> = {
  title: 'Components/Form/FormItem',
  component: FormItem,
  tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof meta>
export default meta

export const 基础示例: Story = {
  args: {},
  render: () => {
    return <div>FormItem 需要配合 Form 使用，本实例仅用于文档展示</div>
  },
}
