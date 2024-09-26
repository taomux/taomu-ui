import type { Meta, StoryObj } from '@storybook/react'

import { Form, useForm } from './'
import { Input } from '../input'
import { Button } from '../button'

/**
 * Base: react-hook-form
 */
const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof meta>
export default meta

export const 基础示例: Story = {
  render: () => {
    const formInstance = Form.useForm()

    return (
      <Form
        formInstance={formInstance}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        <p>component form is created</p>
        <Form.Item
          label="姓名"
          name="name"
          required={{ value: true, message: '姓名必填' }}
          pattern={{ value: /^.{2,4}$/, message: '请输入2-4位字符' }}
        >
          <Input allowClear placeholder="请输入" />
        </Form.Item>
        <Form.Item
          label="姓名2"
          name="name2"
          required={{ value: true, message: '姓名必填' }}
          pattern={{ value: /^.{2,4}$/, message: '请输入2-4位字符' }}
        >
          <Input allowClear placeholder="请输入" />
        </Form.Item>

        <div className="mt-16">
          <Button type="primary" htmltype="submit">
            提交
          </Button>
        </div>
      </Form>
    )
  },
}
