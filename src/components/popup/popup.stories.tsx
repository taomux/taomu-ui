import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Transition } from '../transition'
import { Button } from '../button'
import { Popup, PopupPortal, closeAllPopups, PopupProps } from './'

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
      const demoPopup = new PopupPortal(
        () => {
          return <div>okk</div>
        },
        { backgroundEvent: true }
      )
      demoPopup.open()
      // console.log({ demoPopup })
    }

    return (
      <div className="flex gap-12">
        <Button onClick={openPopup}>open一个</Button>
        <Button onClick={closeAllPopups}>close All</Button>
      </div>
    )
  },
}

export const 绝对位置: Story = {
  render: () => {
    function openPopup(positionType?: PopupProps['positionType']) {
      const demoPopup = new PopupPortal(
        () => {
          return <div>okk</div>
        },
        { positionType }
      )
      demoPopup.open()
    }

    return (
      <div className="flex gap-12 flex-wrap">
        <Button onClick={() => openPopup()}>default</Button>
        <Button onClick={() => openPopup('center')}>center</Button>
        <Button onClick={() => openPopup('center-top')}>center-top</Button>
        <Button onClick={() => openPopup('center-bottom')}>center-bottom</Button>
        <Button onClick={() => openPopup('left')}>left</Button>
        <Button onClick={() => openPopup('left-center')}>left-center</Button>
        <Button onClick={() => openPopup('left-top')}>left-top</Button>
        <Button onClick={() => openPopup('left-bottom')}>left-bottom</Button>
        <Button onClick={() => openPopup('right')}>right</Button>
        <Button onClick={() => openPopup('right-center')}>right-center</Button>
        <Button onClick={() => openPopup('right-top')}>right-top</Button>
        <Button onClick={() => openPopup('right-bottom')}>right-bottom</Button>
        <Button onClick={() => openPopup('top')}>top</Button>
        <Button onClick={() => openPopup('top-center')}>top-center</Button>
        <Button onClick={() => openPopup('top-left')}>top-left</Button>
        <Button onClick={() => openPopup('top-right')}>top-right</Button>
        <Button onClick={() => openPopup('bottom')}>bottom</Button>
        <Button onClick={() => openPopup('bottom-center')}>bottom-center</Button>
        <Button onClick={() => openPopup('bottom-left')}>bottom-left</Button>
        <Button onClick={() => openPopup('bottom-right')}>bottom-right</Button>
      </div>
    )
  },
}
