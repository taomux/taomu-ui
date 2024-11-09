import type { Meta, StoryObj } from '@storybook/react'

import { CheckboxGroup } from './checkbox-group'

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Components/Checkbox/CheckboxGroup',
  component: CheckboxGroup,
  tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof meta>
export default meta

export const 基础示例: Story = {
  args: {
    options: [
      { label: 'Checkbox 1', key: '1' },
      { label: 'Checkbox 2', key: '2' },
      { label: 'Checkbox 3', key: '3' },
    ]
  },
}
