import type { Meta, StoryObj } from '@storybook/react'

import { PopupTrigger } from './popup-trigger'

const meta: Meta<typeof PopupTrigger> = {
  title: 'Components/Popup/PopupTrigger',
  component: PopupTrigger,
  tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof meta>
export default meta

export const 基础示例: Story = {
  args: {},
}
