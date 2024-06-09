import type { Meta, StoryObj } from '@storybook/react'

import { Progress } from './progress'

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof meta>
export default meta

export const 基础示例: Story = {
  args: {
    striped: true,
    progress: 75,
    children: 'Text...',
  },
}

export const 类型: Story = {
  args: {
    progress: 75,
  },
  render: (args) => {
    return (
      <div className="flex col gap-16 center-v">
        <Progress {...args} />
        <Progress {...args} striped />
        <Progress {...args} type="success" />
        <Progress {...args} type="success" striped />
        <Progress {...args} type="info" />
        <Progress {...args} type="info" striped />
        <Progress {...args} type="warning" />
        <Progress {...args} type="warning" striped />
        <Progress {...args} type="error" />
        <Progress {...args} type="error" striped />
        <Progress {...args} type="gray" />
        <Progress {...args} type="gray" striped />
      </div>
    )
  },
}
