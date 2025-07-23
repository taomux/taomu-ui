import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '../button'
import { Checkbox } from './checkbox'

/**
 * 纯粹且完美
 */
const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof meta>
export default meta

export const 基础示例: Story = {
  args: {
    label: 'checkbox',
  },
}

export const 禁用: Story = {
  args: {
    label: 'disabled',
    disabled: true,
  },
}

/**
 * 一般不会搞这么大，使用默认尺寸获得最佳视觉效果
 */
export const 尺寸和圆角: Story = {
  render: () => {
    return (
      <div className="flex row gap-12 flex-wrap">
        <Checkbox label="size-11" size={11} />
        <Checkbox label="size-13(default)" />
        <Checkbox label="size-18" size={18} />
        <Checkbox label="size-24" size={24} />
        <Checkbox label="size-32" size={32} />
        <Checkbox label="size-32-r-12" size={32} radius={12} />
        <Checkbox label="size-48" size={48} />
        <Checkbox label="size-48-r-30" size={48} radius={30} />
      </div>
    )
  },
}

/**
 * label 作为快捷属性用于快速定义标签
 *
 * 如果你传入了任意 children，那么 label 将失效
 */
export const Label与Children: Story = {
  args: {
    label: 'checkbox label',
    children: 'checkbox children',
  },
}

export const 受控状态: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false)

    return (
      <div>
        <div className="mb-12">
          <Button onClick={() => setChecked(!checked)}>checked: {checked + ''}</Button>
        </div>

        <Checkbox label="controlled" value={checked} onChange={(e) => setChecked(e.target.checked)} />
      </div>
    )
  },
}
