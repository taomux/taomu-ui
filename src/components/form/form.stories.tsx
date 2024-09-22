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
    const { formInstance } = useForm()

    return (
      <Form
        formInstance={formInstance}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        <p>component form is created</p>
        <Form.Item label="姓名" name="name" required pattern={/^.{2,4}$/}>
          <Input allowClear />
        </Form.Item>

        <div>
          <Button type="primary" htmltype="submit">
            提交
          </Button>
        </div>
      </Form>
    )
  },
}
