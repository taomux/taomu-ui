import type { Meta, StoryObj } from '@storybook/react-vite'

import { Loading } from './loading'

/**
 * 常规 Loading 组件
 */
const meta: Meta<typeof Loading> = {
  title: 'Components/Loading',
  component: Loading,
  tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof meta>
export default meta

export const 基础示例: Story = {
  args: {},
}

export const 颜色: Story = {
  args: {
    color: '#09c',
  },
}

/**
 * 不能 < 4
 */
export const 尺寸: Story = {
  args: {},
  render: () => {
    return (
      <div className="flex gap-12">
        <Loading size={4} />
        <Loading size={8} />
        <Loading size={12} />
        <Loading size={24} />
        <Loading size={32} />
        <Loading size={48} />
        <Loading size={64} />
      </div>
    )
  },
}

export const 粗细: Story = {
  args: {
    size: 48,
    weight: 8,
  },
}

export const 速度: Story = {
  args: {
    size: 48,
    speed: 0.4,
  },
}

export const 居中测试: Story = {
  args: {},
  render: () => {
    return (
      <div className="flex gap-8 center-v">
        <Loading />
        <div>Text...</div>
      </div>
    )
  },
}
