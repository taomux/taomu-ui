import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { sleep } from 'taomu-toolkit'

import { Button } from '../button'
import { Checkbox } from '../checkbox'
import { toast } from '../toast'
import { Dialog, DialogPortal, useDialog, DialogComponentProps } from './'

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof meta>
export default meta

export const 基础示例: Story = {
  args: {
    title: 'Title',
    children: 'Content',
  },
}

export const 无头: Story = {
  args: {
    children: 'Content',
  },
}

export const 无脚: Story = {
  args: {
    children: 'Content',
    footer: false,
  },
}

export const 按钮居中: Story = {
  args: {
    title: 'Title',
    children: 'Content',
    footerAlign: 'center',
  },
}

export const 无关闭icon: Story = {
  args: {
    title: 'Title',
    children: 'Content',
    showCloseIcon: false,
  },
}

export const 无外边框: Story = {
  args: {
    title: 'Title',
    children: 'Content',
    outerBorder: false,
  },
}

export const 无分割线: Story = {
  args: {
    title: 'Title',
    children: 'Content',
    splitBorder: false,
  },
}

export const 阴影: Story = {
  args: {
    title: 'Title',
    children: 'Content',
  },
  render: (args) => {
    return (
      <div className="flex col gap-12">
        <Dialog {...args} shadow={false}>
          无
        </Dialog>
        <Dialog {...args} shadow="xs">
          xs
        </Dialog>
        <Dialog {...args} shadow="sm">
          sm
        </Dialog>
        <Dialog {...args}>Default</Dialog>
        <Dialog {...args} shadow="md">
          md
        </Dialog>
        <Dialog {...args} shadow="lg">
          lg
        </Dialog>
        <Dialog {...args} shadow="xl">
          xl
        </Dialog>
      </div>
    )
  },
}

export const 底部元素扩展: Story = {
  args: {
    title: 'Title',
    children: 'Content',
    width: 600,
    beforeFooterNodes: [
      <Checkbox key="checkbox">checkbox</Checkbox>,
      <div key="full" className="flex-1"></div>,
      <Button key="btn-left" type="warning" glass>
        Btn Left
      </Button>,
    ],
    afterFooterNodes: [
      <Button key="btn-right" type="primary" glass>
        Btn Right
      </Button>,
    ],
  },
}

export const 长标题: Story = {
  args: {
    title: 'Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title',
    children: 'Content',
  },
}

export const 函数打开: Story = {
  render() {
    function openDialog() {
      const dialog = new DialogPortal(
        () => {
          return <div>dialog content</div>
        },
        {
          title: 'Title',
          onClose: () => {
            console.log('onClose')
          },
          onOk: () => {
            console.log('onOk')
          },
          onCancel: () => {
            console.log('onCancel')
          },
        }
      )
      dialog.open()
    }

    return (
      <div>
        <Button onClick={openDialog}>open一个</Button>
      </div>
    )
  },
}

export const 事件穿透: Story = {
  render() {
    function openDialog() {
      const dialog = new DialogPortal(
        () => {
          return <div>dialog content</div>
        },
        { title: 'Title' },
        {
          overlay: false,
          backgroundEvent: true,
        }
      )
      dialog.open()
    }

    return (
      <div>
        <Button onClick={openDialog}>open一个</Button>
      </div>
    )
  },
}

export const 异步关闭: Story = {
  render() {
    function openDialog() {
      const dialog = new DialogPortal(
        () => {
          return <div>dialog content</div>
        },
        {
          title: 'Title',
          onClose: () => {
            console.log('onClose')
          },
          onOk: async () => {
            await sleep(300)
            console.log('onOk')
          },
          onCancel: async () => {
            await sleep(1000)
            console.log('onCancel')
            // return Promise.reject() // 中断关闭动作
          },
        }
      )
      dialog.open()
    }

    return (
      <div>
        <Button onClick={openDialog}>open一个</Button>
      </div>
    )
  },
}

export const 内部定义回调: Story = {
  render() {
    async function openDialog() {
      const dialog = new DialogPortal(
        ({ dialogPortalInstance, defineOnOk, defineOnCancel }) => {
          const countRef = React.useRef(0)

          React.useEffect(() => {
            countRef.current = 3
            console.log(dialogPortalInstance)
          }, [])

          defineOnOk(async () => {
            await sleep(300)

            if (countRef.current > 0) {
              const msg = `${countRef.current} 次后关闭`
              toast.warning(msg)
              countRef.current -= 1
              throw new Error(msg)
            }

            return 'ok result'
          })

          defineOnCancel(async () => {
            return 'cancel result'
          })

          return <div>dialog content</div>
        },
        {
          title: 'Title',
          children: 'Content',
          asyncCallback: (type) => {
            console.log('asyncCallback', type)

            if (type === 'ok') {
              toast.success('Success')
            }
          },
        },
        { clickToClose: true }
      )
      return dialog
        .open()
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }

    return (
      <div>
        <Button onClick={openDialog}>open一个</Button>
      </div>
    )
  },
}

export const Hooks调用: Story = {
  render() {
    const dialog = useDialog(
      ({ dialogPortalInstance }) => {
        return (
          <div className="flex col gap-12">
            dialog content{' '}
            <Button
              onClick={() => {
                dialogPortalInstance.close()
              }}
            >
              内部关闭
            </Button>
            <Button onClick={() => toast.info('toast message')}>toast</Button>
          </div>
        )
      },
      {
        title: 'Title',
        onClose: () => {
          console.log('onClose')
        },
        onOk: () => {
          console.log('onOk')
        },
        onCancel: () => {
          console.log('onCancel')
        },
      }
    )

    function openDialog() {
      dialog.open()
    }

    return (
      <div className="flex row gap-12">
        <Button onClick={openDialog}>open一个</Button>
        <Button onClick={() => toast.info('toast message')}>toast</Button>
      </div>
    )
  },
}

export const 更新弹层内容: Story = {
  render() {
    const countRef = React.useRef(0)

    const dialog = useDialog<DialogComponentProps & { count: number }>(
      ({ count, dialogPortalInstance }) => {
        return (
          <div className="flex col gap-12">
            <div>dialog content {count}</div>
            <div>esc 关闭 {dialogPortalInstance.baseOptions.escToClose + ''}</div>
          </div>
        )
      },
      {
        title: 'Title',
      },
      {
        overlay: false,
        backgroundEvent: true,
      }
    )

    function openDialog() {
      dialog.open({ count: countRef.current })
    }

    function add() {
      countRef.current += 1
      dialog.dispatchUpdate(
        { count: countRef.current },
        { title: `Title: ${countRef.current}` },
        { escToClose: !dialog.baseOptions.escToClose }
      )
    }

    return (
      <div className="flex row gap-12">
        <Button onClick={openDialog}>open一个</Button>
        <Button onClick={add}>add</Button>
      </div>
    )
  },
}

export const 无动画: Story = {
  render() {
    const dialog = useDialog(
      ({ dialogPortalInstance }) => {
        return (
          <div>
            dialog content{' '}
            <Button
              onClick={() => {
                dialogPortalInstance.close()
              }}
            >
              内部关闭
            </Button>
          </div>
        )
      },
      {
        title: 'Title',
        onClose: () => {
          console.log('onClose')
        },
        onOk: () => {
          console.log('onOk')
        },
        onCancel: () => {
          console.log('onCancel')
        },
      },
      {
        contentAnimationConfig: false,
        overlayAnimationConfig: false,
      }
    )

    function openDialog() {
      dialog.open()
    }

    return (
      <div>
        <Button onClick={openDialog}>open一个</Button>
      </div>
    )
  },
}

export const 超出屏幕滚动: Story = {
  render() {
    const dialog = useDialog(
      () => {
        return (
          <div>
            {Array.from({ length: 100 }).map((_, index) => {
              return <div key={index}>item {index}</div>
            })}
          </div>
        )
      },
      {
        title: '100 items',
        stickyFrame: true,
      }
    )

    function openDialog() {
      dialog.open()
    }

    return (
      <div>
        <Button onClick={openDialog}>open一个</Button>
      </div>
    )
  },
}
