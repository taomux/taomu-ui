import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './button'
import { ButtonLoadingBar } from './button.loading'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof meta>
export default meta

export const 基础示例: Story = {
  args: {
    children: 'Default',
  },
}

export const 各种类型: Story = {
  args: {},

  render: () => {
    return (
      <div className="flex gap-12">
        <Button type="default">Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="danger">Danger</Button>
        <Button type="gray">Gray</Button>
        <Button type="link">Link</Button>
      </div>
    )
  },
}

export const 基础示例2: Story = {
  args: {},
  render: () => {
    const [count, setCount] = React.useState(0)
    const [classNames, setClassNames] = React.useState<string[]>([])

    return (
      <div className="flex row center-v gap-12">
        <Button>Default</Button>
        <Button
          cssVars={{ btnRadius: count, btnOutlineColor: 'red' }}
          style={{ zIndex: count }}
          className={classNames}
          onClick={() => {
            setCount(count + 1)
            setClassNames(classNames.concat(`add-class-${count}`))
          }}
        >
          越点越圆
        </Button>
      </div>
    )
  },
}

export const Loading: Story = {
  args: {},
  render: () => {
    return (
      <div>
        <ButtonLoadingBar />
      </div>
    )
  },
}
