import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Portal from '@rc-component/portal'

import { Transition } from '../transition'
import { Button } from '../button'
import { Popup } from './popup'

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

  render: () => {
    const [open, setOpen] = React.useState(false)
    const [count, setCount] = React.useState(0)
    const nodeRef = React.useRef<HTMLDivElement>(null)

    // React.useEffect(() => {
    //   if (!nodeRef.current) return
    //   console.log('get nodeRef', nodeRef.current)
    // }, [nodeRef.current])

    // React.useEffect(() => {
    //   console.log('----------', nodeRef.current)
    // }, [])

    return (
      <div>
        <Button onClick={() => setOpen(!open)}>open: {open + ''}</Button>
        <Transition
          show={open}
          proxyRef={nodeRef}
          onBeforeEnter={() => console.log('before enter')}
          onEnter={() => console.log('enter')}
          onBeforeLeave={() => console.log('before leave')}
          onLeave={() => console.log('leave')}
        >
          <Portal getContainer={() => document.body} open={true}>
            <div>
              Hello World {count}
              <Button onClick={() => setCount(count + 1)}>add</Button>
            </div>
          </Portal>
        </Transition>

        {/* <div style={{ height: 1000 }}></div> */}
      </div>
    )
  },
}
