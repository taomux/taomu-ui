import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import { Switch } from './switch'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof meta>
export default meta

export const 基础示例: Story = {
  args: {},
}

/**
 * 通过 `width` 与 `height` 控制尺寸
 *
 * 通过 `radius` 控制圆角
 */
export const 尺寸与圆角: Story = {
  render: () => {
    return (
      <div className="flex row gap-12 flex-wrap">
        <Switch width={24} />
        <Switch />
        <Switch radius={18} disabled />
        <Switch width={50} />
        <Switch width={32} height={32} />
        <Switch width={68} height={32} />
        <Switch width={100} height={100} />
        <Switch width={188} height={100} />
      </div>
    )
  },
}

export const 禁用状态: Story = {
  args: {
    disabled: true,
  },
}

export const 激活状态: Story = {
  args: {
    value: true,
  },
}

export const Loading状态: Story = {
  render: () => {
    return (
      <div className="flex row gap-12 flex-wrap">
        <Switch loading />
        <Switch loading value />
        <Switch loading width={32} height={32} value />
        <Switch loading width={50} height={20} value />
        <Switch loading width={50} height={50} value />
        <Switch loading width={88} height={88} value />
        <Switch loading width={188} height={88} value />
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
          <Button onClick={() => setChecked(!checked)}>active: {checked + ''}</Button>
        </div>

        <Switch value={checked} onChange={(e) => setChecked(e.target.checked)} />
      </div>
    )
  },
}

/**
 * 如果 onChange 返回一个 Promise, 则自动添加 loading
 */
export const autoLoading: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false)

    async function handleChange(checked: boolean) {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          setChecked(checked)
          resolve()
        }, 1000)
      })
    }

    return (
      <div>
        <Switch value={checked} onChange={(e) => handleChange(e.target.checked)} />
      </div>
    )
  },
}
