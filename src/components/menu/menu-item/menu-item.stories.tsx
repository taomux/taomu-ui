import type { Meta, StoryObj } from '@storybook/react-vite'

import { IconActivity } from '../../icons'
import { MenuItem } from './menu-item'

const meta: Meta<typeof MenuItem> = {
  title: 'Components/Menu/MenuItem',
  component: MenuItem,
  tags: ['autodocs'],
  argTypes: {},
}

type Story = StoryObj<typeof meta>
export default meta

export const 基础示例: Story = {
  args: {
    children: 'MenuItem',
  },
}

export const Icon: Story = {
  args: {
    icon: <IconActivity size={16} />,
    children: 'MenuItem',
  },
}

export const 不同状态: Story = {
  args: {},
  render: () => {
    return (
      <div className="flex col gap-8" style={{ width: 200 }}>
        <MenuItem>正常</MenuItem>
        <MenuItem active>Active</MenuItem>
        <MenuItem divider />
        <MenuItem disabled>Disabled</MenuItem>
        <MenuItem disabled active>
          Disabled-Active
        </MenuItem>
      </div>
    )
  },
}
