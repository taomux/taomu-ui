import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

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
 *
 * 你可以不用，但不能没有
 */
export const 尺寸和圆角: Story = {
  render: () => {
    return (
      <div className="flex row gap-12">
        <Checkbox label="size-12" size={12} />
        <Checkbox label="size-16(default)" />
        <Checkbox label="size-24" size={24} />
        <Checkbox label="size-32" size={32} />
        <Checkbox label="size-32-r-12" size={32} radius={12} />
        <Checkbox label="size-48" size={48} />
        <Checkbox label="size-48-r-30" size={48} radius={30} />
      </div>
    )
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

        <Checkbox label="controlled" value={checked} onChange={setChecked} />
      </div>
    )
  },
}
