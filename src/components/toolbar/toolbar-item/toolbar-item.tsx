import React from 'react'
import clsx from 'clsx'
import { mapInlineCssVars } from 'taomu-toolkit'

import { useTaomuClassName, useInlineStyle } from '../../../hooks'
import { PopupTrigger, PopupPositionType, TriggerType } from '../../popup'

import { toolbarItemStyled, ToolbarItemCssVars, toolbarTooltipStyled } from './toolbar-item.styled'

export interface ToolbarItemProps extends BaseComponentType<ToolbarItemCssVars> {
  id?: string
  label?: React.ReactNode
  icon?: React.ReactNode
  tooltip?: React.ReactNode
  tooltipTrigger?: TriggerType
  tooltipPosition?: PopupPositionType
  tooltipOffset?: string | number
}

export const ToolbarItem: React.FC<ToolbarItemProps> = ({
  className,
  cssVars,
  style,
  children,
  label,
  icon,
  tooltip,
  tooltipTrigger = 'hover',
  tooltipPosition,
  tooltipOffset,
  ...wrapProps
}) => {
  const toolbarItemClassNames = useTaomuClassName('toolbar-item', 'flex col center', className)
  const toolbarItemStyle = useInlineStyle<ToolbarItemCssVars>(cssVars, style)

  function renderContent() {
    let content: React.ReactNode = null

    if (children) {
      content = children
      return content
    }

    if (icon) {
      content = icon
    }

    if (label) {
      content = (
        <>
          {content}
          {label}
        </>
      )
    }

    return content
  }

  const resContent = (
    <div className={toolbarItemClassNames} style={toolbarItemStyle} css={toolbarItemStyled} {...wrapProps}>
      {renderContent()}
    </div>
  )

  if (!tooltip) {
    return resContent
  }

  return (
    <PopupTrigger
      trigger={tooltipTrigger}
      position={tooltipPosition}
      content={() => (
        <div
          css={toolbarTooltipStyled}
          className={clsx('bg-background p-8 shadow-md br-4 border rect-1', `toolbar-tooltip-${tooltipPosition}`)}
          style={mapInlineCssVars({ tooltipOffset })}
        >
          {tooltip}
        </div>
      )}
      // portalOptions={{ contentAnimationConfig: false }}
    >
      {resContent}
    </PopupTrigger>
  )
}
