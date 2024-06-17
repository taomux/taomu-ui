import React from 'react'

import { useTaomuClassName } from '../../../hooks'

import {} from '../'

export type TriggerType = 'click' | 'hover'

export interface PopupTriggerProps extends Omit<BaseComponentType, 'cssVars'> {
  children: JSX.Element
  /** 弹出内容 */
  content?: JSX.Element
  /** 触发条件，默认: click  */
  trigger?: TriggerType
  /** 触发元素追加类名 */
  addClassName?: string
}

export const PopupTrigger: React.FC<PopupTriggerProps> = ({ className, style, content, trigger, addClassName, ...wrapProps }) => {
  const popupTriggerClassNames = useTaomuClassName('popup-trigger', className)

  return (
    <div className={popupTriggerClassNames} {...wrapProps}>
      <p>component popup-trigger is created</p>
    </div>
  )
}
