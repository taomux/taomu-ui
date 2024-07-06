import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../../button'
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
  render: () => {
    return (
      <div>
        <PopupTrigger content={() => <div className="p-24 bg-background br-4 shadow-md border rect-1">content</div>}>
          <Button>Hover Me</Button>
        </PopupTrigger>
      </div>
    )
  },
}

export const Click: Story = {
  render: () => {
    return (
      <div>
        <PopupTrigger
          trigger="click"
          content={() => <div className="p-24 bg-background br-4 shadow-md border rect-1">content</div>}
        >
          <Button
            onClick={() => {
              console.log('Button click')
            }}
          >
            Click Me
          </Button>
        </PopupTrigger>
      </div>
    )
  },
}

/**
 * `trigger = "hover"` , 这是默认的
 *
 * 通过 `debounceTime` 来设置防抖时间，默认 150，只在 hover 模式时生效
 */
export const Hover及防抖: Story = {
  render: () => {
    return (
      <div>
        <PopupTrigger
          trigger="hover"
          debounceTime={300}
          content={() => <div className="p-24 bg-background br-4 shadow-md border rect-1">content</div>}
        >
          <Button>Hover Me</Button>
        </PopupTrigger>
      </div>
    )
  },
}

export const 弹出位置: Story = {
  args: {
    content: () => <div className="p-24 bg-background br-4 shadow-md border rect-1">content</div>,
    portalOptions: { edgeOffset: 8 },
  },

  render: (args) => {
    return (
      <div className="flex gap-32 p-32 flex-wrap">
        <PopupTrigger {...args} position="left">
          <Button>Left</Button>
        </PopupTrigger>
        <PopupTrigger {...args} position="left-top">
          <Button>Left Top</Button>
        </PopupTrigger>
        <PopupTrigger {...args} position="left-center">
          <Button>Left Center</Button>
        </PopupTrigger>
        <PopupTrigger {...args} position="left-bottom">
          <Button>Left Bottom</Button>
        </PopupTrigger>
        <PopupTrigger {...args} position="right">
          <Button>Right</Button>
        </PopupTrigger>
        <PopupTrigger {...args} position="right-top">
          <Button>Right Top</Button>
        </PopupTrigger>
        <PopupTrigger {...args} position="right-center">
          <Button>Right Center</Button>
        </PopupTrigger>
        <PopupTrigger {...args} position="right-bottom">
          <Button>Right Bottom</Button>
        </PopupTrigger>
        <PopupTrigger {...args} position="top">
          <Button>Top</Button>
        </PopupTrigger>
        <PopupTrigger {...args} position="top-left">
          <Button>Top Left</Button>
        </PopupTrigger>
        <PopupTrigger {...args} position="top-center">
          <Button>Top Center</Button>
        </PopupTrigger>
        <PopupTrigger {...args} position="top-right">
          <Button>Top Right</Button>
        </PopupTrigger>
        <PopupTrigger {...args} position="bottom">
          <Button>Bottom</Button>
        </PopupTrigger>
        <PopupTrigger {...args} position="bottom-left">
          <Button>Bottom Left</Button>
        </PopupTrigger>
        <PopupTrigger {...args} position="bottom-center">
          <Button>Bottom Center</Button>
        </PopupTrigger>
        <PopupTrigger {...args} position="bottom-right">
          <Button>Bottom Right</Button>
        </PopupTrigger>
      </div>
    )
  },
}
