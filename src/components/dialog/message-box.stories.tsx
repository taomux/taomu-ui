import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '../button'
import * as messageBox from './message-box'

const meta: Meta = {
  title: 'Components/Dialog/messageBox',
  component: () => null,
  tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof meta>
export default meta

export const 基础示例: Story = {
  render: () => {
    return (
      <div className="flex gap-12 flex-wrap">
        <Button onClick={() => messageBox.open('hello', { title: 'Title' })}>open</Button>
        <Button onClick={() => messageBox.info('hello')}>info</Button>
        <Button onClick={() => messageBox.success('hello')}>success</Button>
        <Button onClick={() => messageBox.warning('hello')}>warning</Button>
        <Button onClick={() => messageBox.error('hello')}>error</Button>
      </div>
    )
  },
}

export const Confirm: Story = {
  render: () => {
    return (
      <div className="flex gap-12 flex-wrap">
        <Button
          onClick={() =>
            messageBox.confirm('Question', { onOk: () => console.log('onOk'), onCancel: () => console.log('onCancel') })
          }
        >
          question
        </Button>
        <Button onClick={() => messageBox.confirm('hello', { type: 'info' })}>info</Button>
        <Button onClick={() => messageBox.confirm('hello', { type: 'success' })}>success</Button>
        <Button onClick={() => messageBox.confirm('hello', { type: 'warning' })}>warning</Button>
        <Button onClick={() => messageBox.confirm('hello', { type: 'error' })}>error</Button>
      </div>
    )
  },
}
