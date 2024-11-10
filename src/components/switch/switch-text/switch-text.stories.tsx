import type { Meta, StoryObj } from '@storybook/react'

import { SwitchText } from './switch-text'

const meta: Meta<typeof SwitchText> = {
  title: 'Components/Switch/SwitchText',
  component: SwitchText,
  tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof meta>
export default meta

export const 基础示例: Story = {
  args: {
    children: 'Text',
  },
}

export const 禁用状态: Story = {
  args: {
    disabled: true,
    children: 'Text',
  },
}

export const 长文本: Story = {
  args: {
    children:
      'pick disappear stop out vast regular remain buffalo step rule shop corn gray nice population stairs tales slightly bank cost improve high or carry',
  },
}

export const 字体大小: Story = {
  render: () => {
    return (
      <div className="flex col gap-12">
        <SwitchText>Text default</SwitchText>
        <SwitchText className="fs-12">Text fs-12</SwitchText>
        <SwitchText className="fs-16">Text fs-16</SwitchText>
        <SwitchText className="fs-18">Text fs-18</SwitchText>
        <SwitchText className="fs-24">Text fs-24</SwitchText>
        <SwitchText className="fs-32">Text fs-32</SwitchText>
        <SwitchText className="fs-48">Text fs-48</SwitchText>

        <p>倘若需要剧中，添加 className: center-v</p>
        <SwitchText className="fs-12 center-v">Text fs-12</SwitchText>
        <SwitchText className="fs-16 center-v">Text fs-16</SwitchText>
        <SwitchText className="fs-18 center-v">Text fs-18</SwitchText>
        <SwitchText className="fs-24 center-v">Text fs-24</SwitchText>
        <SwitchText className="fs-32 center-v">Text fs-32</SwitchText>
        <SwitchText className="fs-48 center-v">Text fs-48</SwitchText>
      </div>
    )
  },
}

export const 前置文本: Story = {
  args: {
    children: 'Text',
    beforeText: true,
  },
}

/**
 * 添加 className: between
 */
export const 两端对齐: Story = {
  args: {
    children: 'Text cebozvo@fupeh.la',
    className: 'between',
  },

  render: (args) => {
    return (
      <div className="flex col gap-12">
        <SwitchText {...args} />
        <SwitchText {...args} beforeText />
      </div>
    )
  },
}
