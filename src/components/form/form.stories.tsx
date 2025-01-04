import type { Meta, StoryObj } from '@storybook/react'

import { sleep } from 'taomu-toolkit'
import { Form } from './'
import { Input } from '../input'
import { Button } from '../button'
import { Select } from '../select'
import { CheckboxGroup } from '../checkbox'
import { RadioGroup } from '../radio'
import { SwitchText } from '../switch'

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
