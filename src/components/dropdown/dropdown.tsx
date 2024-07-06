import React from 'react'
import clsx from 'clsx'

// import { useTaomuClassName, useInlineStyle } from '../../hooks'
// import { dropdownStyled, DropdownCssVars } from './dropdown.styled'
import { PopupTrigger, type PopupTriggerProps, type PopupPortal, type PopupPortalOptions } from '../popup'
import { Menu, type MenuProps, type MenuItemProps } from '../menu'
import { dropdownAnimationConfigHandler } from './dropdown.utils'

export interface DropdownProps extends PopupTriggerProps {
  menus?: MenuProps['items']
  menuProps?: MenuProps
  equalWidth?: PopupPortalOptions['equalWidth']
}

export const Dropdown: React.FC<DropdownProps> = ({
  children,
  menus,
  menuProps = {},
  portalOptions = {},
  equalWidth,
  trigger = 'click',
  ...popupTriggerProps
}) => {
  const popupPortalRef = React.useRef<PopupPortal>(null)

  if (popupTriggerProps.content === undefined) {
    const { handleItemClick, ...restMenuProps } = menuProps

    function handleItemClickH(item: MenuItemProps, index: number, event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
      handleItemClick?.(item, index, event)
      popupPortalRef.current?.close()
    }

    popupTriggerProps.content = () => <Menu handleItemClick={handleItemClickH} backgroundBlur items={menus} {...restMenuProps} />
  }

  // const mergeProps: ReactDivProps = {
  //   className: clsx('taomu-dropdown-content', children.props?.className),
  // }

  return (
    <PopupTrigger
      ref={popupPortalRef}
      trigger={trigger}
      portalOptions={{ equalWidth, edgeOffset: 8, popupAnimationConfigBuilder: dropdownAnimationConfigHandler, ...portalOptions }}
      {...popupTriggerProps}
    >
      {children}
    </PopupTrigger>
  )
}
