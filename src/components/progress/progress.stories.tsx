import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '../button'
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
    progress: 75,
    children: 'Text...',
  },
}

export const 条纹: Story = {
  args: {
    progress: 75,
    striped: true,
    children: 'Text...',
  },
  render: (args) => {
    return (
      <div className="flex col gap-16">
        <Progress {...args} />
        <Progress {...args} animated={false} />
      </div>
    )
  },
}

export const 条纹动画速度: Story = {
  args: {
    striped: true,
    progress: 75,
    children: 'Text...',
  },
  render: (args) => {
    return (
      <div className="flex col gap-16">
        <Progress {...args} cssVars={{ progressSpeed: '1s' }} />
        <Progress {...args} cssVars={{ progressSpeed: '0.3s' }} />
        <Progress {...args} cssVars={{ progressSpeed: '100ms' }} />
      </div>
    )
  },
}

export const 类型: Story = {
  args: {
    progress: 75,
  },
  render: (args) => {
    return (
      <div className="flex col gap-16">
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

export const 尺寸: Story = {
  args: {
    striped: true,
    progress: 75,
  },
  render: (args) => {
    return (
      <div className="flex col gap-16">
        <Progress {...args} width={500} height={100} />
        <Progress {...args} width={'50%'} />
        <Progress {...args} width={500} height={4} cssVars={{ progressStripedSize: 10, progressSpeed: '200ms' }} />
      </div>
    )
  },
}

export const 反转: Story = {
  args: {
    striped: true,
    progress: 75,
  },
  render: (args) => {
    return (
      <div className="flex col gap-16">
        <Progress {...args} />
        <Progress {...args} stripedAnimationReverse />
        <Progress {...args} stripedReverse />
        <Progress {...args} stripedReverse stripedAnimationReverse />
      </div>
    )
  },
}

export const 更多自定义: Story = {
  args: {
    striped: true,
    progress: 45,
    width: 500,
    height: 30,
    cssVars: {
      progressRadius: 0,
      progressBarRadius: 0,
      progressColor: '#09c',
      progressBackgroundMixinColor: '#2c49ba',
      progressStripedSize: '100px',
    },
    children: 'Text...',
  },
}

export const 动态效果: Story = {
  args: {
    striped: true,
  },
  render: (args) => {
    const [progress, setProgress] = React.useState(0)
    const [transition, setTransition] = React.useState(true)

    function add() {
      let next = progress + 10
      if (next > 100) {
        next = 0
      }
      setProgress(next)
    }

    function reduce() {
      let next = progress - 10
      if (next < 0) {
        next = 100
      }
      setProgress(next)
    }

    async function autoAdd(count = 100) {
      for (let i = 0; i <= count; i++) {
        setProgress(i * (100 / count))
        await new Promise((resolve) => setTimeout(resolve, 1000 / count))
      }
    }

    return (
      <div className="flex col gap-12">
        <div className="flex row gap-12">
          <Button onClick={add}>Add</Button>
          <Button onClick={reduce}>Reduce</Button>
          <Button
            onClick={() => {
              setProgress(Math.floor(Math.random() * 100))
            }}
          >
            Random
          </Button>
          <Button onClick={() => autoAdd(10)}>AutoAdd</Button>
        </div>

        <div>
          <p>高密度情况下应该关闭过渡动画</p>
          <div className="flex row gap-12">
            <Button onClick={() => autoAdd()}>AutoAdd</Button>
            <Button onClick={() => setTransition(!transition)}>transition: {transition ? 'on' : 'off'}</Button>
          </div>
        </div>

        <Progress {...args} progress={progress} transition={transition}>
          {progress}%
        </Progress>
      </div>
    )
  },
}
