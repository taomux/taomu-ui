import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import { Transition } from './transition'

/**
 * 动画辅助组件，用于控制内部元素的出入场过渡动画
 */
const meta: Meta<typeof Transition> = {
  title: 'Components/Transition',
  component: Transition,
  tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof meta>
export default meta

export const 基础示例: Story = {
  args: {
    show: true,
    children: <div>123</div>,
  },
}

/**
 * children 的 ref 将在内部被更改，即使传入也不会生效，你应该将 ref 传入 `Transition` 的 `proxyRef` 中
 */
export const 动态示例: Story = {
  render: () => {
    const nodeRef = React.useRef<HTMLDivElement>(null)
    const [show, setShow] = React.useState(false)

    React.useEffect(() => {
      if (!nodeRef.current) return
      console.log('get nodeRef', nodeRef.current)
    }, [nodeRef.current])

    return (
      <div>
        <div className="mb-12">
          <Button onClick={() => setShow(!show)}>show: {show + ''}</Button>
        </div>
        <Transition
          show={show}
          proxyRef={nodeRef}
          enter={{
            keyframes: [
              { transform: 'translate3d(100%, 0, 0)', opacity: 0 },
              { transform: 'translate3d(0, 0, 0)', opacity: 1 },
            ],
            options: {
              duration: 600,
              easing: 'cubic-bezier(0.175, 0.82, 0.265, 1)',
            },
          }}
          exit={{
            keyframes: [
              { transform: 'translate3d(0, 0, 0)', opacity: 1 },
              { transform: 'translate3d(-100%, 0, 0)', opacity: 0 },
            ],
            options: {
              duration: 600,
              easing: 'cubic-bezier(0.175, 0.82, 0.265, 1)',
            },
          }}
        >
          <div className="bg-primary">222</div>
        </Transition>
      </div>
    )
  },
}
