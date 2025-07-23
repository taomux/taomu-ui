import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { RadioGroup } from './radio-group'

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/Radio/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof meta>
export default meta

export const 基础示例: Story = {
  args: {
    options: [
      { label: 'Radio 1', value: '1' },
      { label: 'Radio 2', value: '2' },
      { label: 'Radio 3', value: '3' },
    ],
  },
  render: (args) => {
    const [value, setValue] = React.useState<StringAndNumber>()

    return <RadioGroup {...args} value={value} onChange={(r) => setValue(r.target.value)} />
  },
}
