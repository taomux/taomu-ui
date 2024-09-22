import type { Meta, StoryObj } from '@storybook/react'

import { FormItem } from './form-item'

const meta: Meta<typeof FormItem> = {
  title: 'Components/FormItem',
  component: FormItem,
  tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof meta>
export default meta

export const 基础示例: Story = {
  args: {},
}
