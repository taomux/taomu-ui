import type { Meta, StoryObj } from '@storybook/react-vite'

import { IconSun } from './icon-example.doc'
import { IconList } from './icon-list.doc'

/**
 * Icons
 *
 * use: <a href="https://feathericons.com/" target="_blank">react-feather</a> (MIT)
 *
 * 使用 vite 构建时所有图标均为按需引用
 */
const meta: Meta<typeof IconSun> = {
  title: 'Components/Icons',
  component: IconSun,
  tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof meta>
export default meta

export const 基础示例: Story = {
  args: {
    color: '#f5a104',
    size: 32,
  },
}

export const 图标列表: Story = {
  render: () => <IconList />,
}
