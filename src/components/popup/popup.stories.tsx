import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Transition } from '../transition'
import { Button } from '../button'
import { Popup } from './popup'
import { PopupPortal } from './popup.portal'

const meta: Meta<typeof Popup> = {
  title: 'Components/Popup',
  component: Popup,
  tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof meta>
export default meta

export const 基础示例: Story = {
  args: {},
}

export const 函数打开: Story = {
  args: {},

  render: () => {
    const [count, setCount] = React.useState(0)

    function openPopup() {
      const demoPopup = new PopupPortal(Popup)
      demoPopup.open()
      // console.log({ demoPopup })
    }

    return (
      <div>
        <Button onClick={openPopup}>open一个</Button>
      </div>
    )
  },
}
