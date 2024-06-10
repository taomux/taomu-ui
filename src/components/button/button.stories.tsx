import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './button'
import { IconSun, IconMail } from '../icons'

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

export const 类型: Story = {
  args: {},

  render: () => {
    return (
      <div className="flex gap-12">
        <Button type="default">Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="warning">Warning</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
      </div>
    )
  },
}

export const 禁用状态: Story = {
  args: {
    disabled: true,
  },

  render: (args) => {
    return (
      <div className="flex gap-12">
        <Button {...args} type="default">
          Default
        </Button>
        <Button {...args} type="primary">
          Primary
        </Button>
        <Button {...args} type="warning">
          Warning
        </Button>
        <Button {...args} type="danger">
          Danger
        </Button>
        <Button {...args} type="link">
          Link
        </Button>
      </div>
    )
  },
}

/**
 * 幽灵按钮
 */
export const Ghost: Story = {
  args: {
    ghost: true,
  },

  render: (args) => {
    return (
      <div className="flex gap-12">
        <Button {...args} type="default">
          Default
        </Button>
        <Button {...args} type="primary">
          Primary
        </Button>
        <Button {...args} type="warning">
          Warning
        </Button>
        <Button {...args} type="danger">
          Danger
        </Button>
        <Button {...args} type="link">
          Link
        </Button>
      </div>
    )
  },
}

/**
 * 玻璃按钮
 */
export const Glass: Story = {
  args: {
    glass: true,
  },

  render: (args) => {
    return (
      <div className="flex gap-12">
        <Button {...args} type="default">
          Default
        </Button>
        <Button {...args} type="primary">
          Primary
        </Button>
        <Button {...args} type="warning">
          Warning
        </Button>
        <Button {...args} type="danger">
          Danger
        </Button>
        <Button {...args} type="link">
          Link
        </Button>
      </div>
    )
  },
}

export const 不显示外轮廓: Story = {
  args: {
    children: 'Default',
    showOutline: false,
  },
}

/**
 * 加载中状态
 *
 * 使用了 [Progress](/docs/components-progress--docs) 组件
 */
export const Loading: Story = {
  render: (args) => {
    const [loading, setLoading] = React.useState(true)

    return (
      <div className="flex col gap-12">
        <div>
          <Button {...args} onClick={() => setLoading(!loading)}>
            loading: {loading ? 'on' : 'off'}
          </Button>
        </div>
        <div className="flex gap-12">
          <Button {...args} loading={loading} type="default">
            Default
          </Button>
          <Button {...args} loading={loading} type="primary">
            Primary
          </Button>
          <Button {...args} loading={loading} type="warning">
            Warning
          </Button>
          <Button {...args} loading={loading} type="danger">
            Danger
          </Button>
          <Button {...args} loading={loading} type="link">
            Link
          </Button>
        </div>

        <div className="flex gap-12">
          <Button {...args} loading={loading} glass type="default">
            Default
          </Button>
          <Button {...args} loading={loading} glass type="primary">
            Primary
          </Button>
          <Button {...args} loading={loading} glass type="warning">
            Warning
          </Button>
          <Button {...args} loading={loading} glass type="danger">
            Danger
          </Button>
          <Button {...args} loading={loading} glass type="link">
            Link
          </Button>
        </div>

        <div className="flex gap-12">
          <Button {...args} loading={loading} ghost type="default" disabled>
            Default
          </Button>
          <Button {...args} loading={loading} ghost type="primary">
            Primary
          </Button>
          <Button {...args} loading={loading} ghost type="warning">
            Warning
          </Button>
          <Button {...args} loading={loading} ghost type="danger">
            Danger
          </Button>
          <Button {...args} loading={loading} ghost type="link">
            Link
          </Button>
        </div>
      </div>
    )
  },
}

/**
 * 默认使用 flex 布局
 */
export const 居中测试: Story = {
  render: () => {
    return (
      <div>
        <Button className="gap-12">
          <IconMail size={16} />
          <span>Text</span>
          <span className="fs-18">fs-18</span>
          <IconSun size={12} />
        </Button>
      </div>
    )
  },
}

/**
 * 本 UI 库的大多数组件都接收 `props.cssVars` 来自定义样式
 * 详见 typedoc
 */
export const CssVars_深度自定义: Story = {
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

/**
 * 如果 onClick 返回一个 Promise, 则自动添加 loading
 *
 * 控制开关：`autoLoading`，默认为 `true`
 *
 * 效果不错，不用担心动画性能，你的GPU参与了渲染
 */
export const AutoLoading: Story = {
  args: {
    autoLoading: true,
  },

  render: (args) => {
    async function sleep() {
      return new Promise((resolve) => setTimeout(resolve, 2000))
    }

    return (
      <div className="flex gap-12">
        <Button {...args} type="default" onClick={sleep}>
          Promise
        </Button>
        <Button {...args} type="primary" onClick={sleep}>
          Promise
        </Button>
        <Button {...args} type="primary" glass onClick={sleep}>
          Promise
        </Button>
        <Button {...args} type="warning" glass onClick={sleep}>
          Promise
        </Button>
        <Button {...args} type="danger" glass onClick={sleep}>
          Promise
        </Button>
      </div>
    )
  },
}
