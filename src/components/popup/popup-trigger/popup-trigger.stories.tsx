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
        <PopupTrigger content={() => <div className="p-24 bg-background br-4 shadow-md">ok</div>}>
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
        <PopupTrigger trigger="click" content={() => <div className="p-24 bg-background br-4 shadow-md">ok</div>}>
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
