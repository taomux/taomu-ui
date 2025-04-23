import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { sleep } from 'taomu-toolkit'
import { Form } from './'
import { Input } from '../input'
import { Button } from '../button'
import { Select } from '../select'
import { CheckboxGroup } from '../checkbox'
import { RadioGroup } from '../radio'
import { SwitchText } from '../switch'
import { useDialog } from '../dialog'

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

interface FormData {
  name: string
  length: string
  select: string
  checkbox: number[]
  radio: string
  switch: boolean
}

export const 基础示例: Story = {
  render: () => {
    const { formInstance, clearFormAllValues } = Form.useForm<FormData>({
      defaultValues: { name: '张三', length: '11', select: '2', checkbox: [2] },
    })

    return (
      <div>
        <Form
          formInstance={formInstance}
          onSubmit={(values) => {
            console.log(values)
            alert(JSON.stringify(values))
          }}
          labelWidth={80}
        >
          <Form.Item
            label="姓名"
            name="name"
            required={{ value: true, message: '姓名必填' }}
            pattern={{ value: /^.{2,4}$/, message: '请输入2-4位字符' }}
          >
            <Input allowClear placeholder="请输入" onChange={(e) => console.log(e)} />
          </Form.Item>
          <Form.Item
            label="尺寸"
            name="length"
            min={{ value: 1, message: '最小为1' }}
            max={{ value: 20, message: '最大为20' }}
            required
            pattern={{ value: /^[0-9]{1,2}$/, message: '1-20的整数' }}
          >
            <Input allowClear placeholder="请输入0-20的整数" />
          </Form.Item>

          <Form.Item label="选择器" name="select" required>
            <Select
              placeholder="请选择"
              options={[
                { label: '选项1', value: 1 },
                { label: '选项2', value: 2 },
              ]}
              allowClear
            />
          </Form.Item>

          <Form.Item label="多选框" name="checkbox" required>
            <CheckboxGroup
              options={[
                { label: '选项1', value: 1 },
                { label: '选项2', value: 2 },
                { label: '选项3', value: 3 },
              ]}
            />
          </Form.Item>

          <Form.Item
            label="单选框"
            name="radio"
            required
            onChange={(e) => {
              console.log(e)
            }}
          >
            <RadioGroup
              options={[
                { label: '选项1', value: 1 },
                { label: '选项2', value: 2 },
                { label: '选项3', value: 3 },
              ]}
            />
          </Form.Item>

          <Form.Item label="开关" name="switch">
            <SwitchText
              onChange={async (e) => {
                console.log(e)
                await sleep(1000)
              }}
            >
              Switch text
            </SwitchText>
          </Form.Item>

          <Form.Item>
            <div className="flex gap-12">
              <Button type="primary" htmlType="submit">
                提交
              </Button>
              <Button type="default" htmlType="reset">
                重置
              </Button>
              <Button
                type="default"
                onClick={() => {
                  clearFormAllValues()
                }}
              >
                清空
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    )
  },
}

export const 布局: Story = {
  render: () => {
    const { formInstance } = Form.useForm()

    return (
      <div>
        <Form
          formInstance={formInstance}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          <Form.Item
            label="姓名"
            name="name"
            required={{ value: true, message: '姓名必填' }}
            pattern={{ value: /^.{2,4}$/, message: '请输入2-4位字符' }}
          >
            <Input allowClear placeholder="请输入" />
          </Form.Item>
          <Form.Item
            label="尺寸"
            name="length"
            min={{ value: 1, message: '最小为1' }}
            max={{ value: 20, message: '最大为20' }}
            pattern={{ value: /^[0-9]{1,2}$/, message: '1-20的整数' }}
          >
            <Input allowClear placeholder="请输入0-20的整数" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>

        <Form
          layout="inline"
          formInstance={formInstance}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          <Form.Item
            label="姓名"
            name="name"
            required={{ value: true, message: '姓名必填' }}
            pattern={{ value: /^.{2,4}$/, message: '请输入2-4位字符' }}
          >
            <Input allowClear placeholder="请输入" />
          </Form.Item>
          <Form.Item
            label="尺寸"
            name="length"
            min={{ value: 1, message: '最小为1' }}
            max={{ value: 20, message: '最大为20' }}
            pattern={{ value: /^[0-9]{1,2}$/, message: '1-20的整数' }}
          >
            <Input allowClear placeholder="请输入0-20的整数" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>

        <Form
          layout="vertical"
          formInstance={formInstance}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          <Form.Item
            label="姓名"
            name="name"
            required={{ value: true, message: '姓名必填' }}
            pattern={{ value: /^.{2,4}$/, message: '请输入2-4位字符' }}
          >
            <Input allowClear placeholder="请输入" />
          </Form.Item>
          <Form.Item
            label="尺寸"
            name="length"
            min={{ value: 1, message: '最小为1' }}
            max={{ value: 20, message: '最大为20' }}
            pattern={{ value: /^[0-9]{1,2}$/, message: '1-20的整数' }}
          >
            <Input allowClear placeholder="请输入0-20的整数" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  },
}

export const LabelWidth: Story = {
  render: () => {
    const { formInstance } = Form.useForm()

    return (
      <div>
        <Form
          formInstance={formInstance}
          labelWidth={100}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          <Form.Item
            label="姓名"
            name="name"
            required={{ value: true, message: '姓名必填' }}
            pattern={{ value: /^.{2,4}$/, message: '请输入2-4位字符' }}
          >
            <Input allowClear placeholder="请输入" />
          </Form.Item>
          <Form.Item
            label="尺寸"
            name="length"
            min={{ value: 1, message: '最小为1' }}
            max={{ value: 20, message: '最大为20' }}
            pattern={{ value: /^[0-9]{1,2}$/, message: '1-20的整数' }}
          >
            <Input allowClear placeholder="请输入0-20的整数" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  },
}

export const 额外元素: Story = {
  render: () => {
    const { formInstance } = Form.useForm()

    return (
      <div>
        <Form
          formInstance={formInstance}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          <Form.Item
            label="姓名"
            name="name"
            required={{ value: true, message: '姓名必填' }}
            pattern={{ value: /^.{2,4}$/, message: '请输入2-4位字符' }}
            extra={<span>额外元素</span>}
          >
            <Input allowClear placeholder="请输入" />
          </Form.Item>
        </Form>
      </div>
    )
  },
}

/**
 * 使用 `formInstance.trigger()` 触发校验
 */

export const 主动触发校验: Story = {
  render: () => {
    const { formInstance } = Form.useForm()

    return (
      <div>
        <Form
          formInstance={formInstance}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          <Form.Item
            label="姓名"
            name="name"
            required={{ value: true, message: '姓名必填' }}
            pattern={{ value: /^.{2,4}$/, message: '请输入2-4位字符' }}
            extra={
              <>
                <Button onClick={() => formInstance.reset({ name: '' })}>Reset</Button>
                <Button type="primary" onClick={() => sleep(500)}>
                  Submit
                </Button>
              </>
            }
          >
            <Input allowClear placeholder="请输入" />
          </Form.Item>
        </Form>
      </div>
    )
  },
}

/**
 * 通过 triggerOnChange 控制
 */
export const 变更时校验: Story = {
  render: () => {
    const { formInstance } = Form.useForm()

    return (
      <div>
        <Form formInstance={formInstance}>
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
            triggerOnChange={false}
          >
            <Input allowClear placeholder="请输入" />
          </Form.Item>
        </Form>
      </div>
    )
  },
}

const FormDialog: React.FC<any> = ({ a }) => {
  const { open } = useDialog(FormDialog, { title: 'test2' })

  const { formInstance } = Form.useForm({
    defaultValues: {
      type: 0,
      name: '',
    },
  })

  React.useEffect(() => {
    console.count('FormDialog init:::' + a)
  }, [])

  return (
    <Form
      formInstance={formInstance}
      onSubmit={(values) => {
        console.log(values)
      }}
      labelWidth={100}
    >
      <Form.Item label="名称" name="name" required>
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item label="类型" name="type" required="请选择类型">
        <Select
          options={[
            { label: '0', value: 0 },
            { label: '1', value: 1 },
            { label: '2', value: 2 },
          ]}
        />
      </Form.Item>

      <Button
        onClick={() => {
          open()
        }}
      >
        open
      </Button>
    </Form>
  )
}

export const DialogForm: Story = {
  render: () => {
    const { open } = useDialog(FormDialog, { title: 'test' })
    return (
      <div>
        <Button
          onClick={() => {
            open({ a: 'ok' })
          }}
        >
          Open Dialog
        </Button>
      </div>
    )
  },
}
