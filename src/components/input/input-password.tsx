import React from 'react'
import clsx from 'clsx'

import { IconEye, IconEyeOff } from '../icons'
import { Input, InputProps } from './input'

export interface InputPasswordProps extends Omit<InputProps, 'type'> {
  /** 是否显示眼睛图标， 默认为 true */
  showEyeIcon?: boolean
}

export const InputPassword: React.FC<InputPasswordProps> = ({ showEyeIcon = true, ...wrapProps }) => {
  const [eyeState, setEyeState] = React.useState(false)

  const renderIcon = React.useCallback(() => {
    if (!showEyeIcon) return null

    if (eyeState) {
      return (
        <IconEye
          size={14}
          className="color-gray cup"
          onClick={() => {
            setEyeState(false)
          }}
        />
      )
    } else {
      return (
        <IconEyeOff
          size={14}
          className="color-gray cup"
          onClick={() => {
            setEyeState(true)
          }}
        />
      )
    }
  }, [showEyeIcon, eyeState])

  wrapProps.className = clsx({ 'show-eye-icon': showEyeIcon }, wrapProps.className)

  return <Input type={eyeState ? 'text' : 'password'} rightNode={renderIcon()} {...wrapProps} />
}
