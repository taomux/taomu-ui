import React from 'react'

import { PopupTrigger, type PopupTriggerProps, type PopupPortal, type PopupPortalOptions } from '../popup'
import { Menu, type MenuProps, type MenuItemProps } from '../menu'
import { dropdownAnimationConfigHandler } from './dropdown.utils'

export interface DropdownProps<ContentProps = MenuProps> extends PopupTriggerProps<ContentProps> {
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
  contentProps = {},
  ...popupTriggerProps
}) => {
  const popupTriggerRef = React.useRef<PopupPortal>(null)

  React.useEffect(() => {
    return () => {
      if (popupTriggerRef.current) {
        popupTriggerRef.current.destroy()
      }
    }
  }, [])

  if (popupTriggerProps.content === undefined) {
    const { handleItemClick, ...restMenuProps } = menuProps

    function handleItemClickH(item: MenuItemProps, index: number, event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
      popupTriggerRef.current?.close()
      handleItemClick?.(item, index, event)
    }

    popupTriggerProps.content = (menuProps: MenuProps) => {
      return <Menu handleItemClick={handleItemClickH} backgroundBlur {...menuProps} {...restMenuProps} />
    }
  }

  contentProps.items = menus

  return (
    <PopupTrigger
      ref={popupTriggerRef}
      trigger={trigger}
      contentProps={contentProps}
      portalOptions={{ equalWidth, edgeOffset: 8, popupAnimationConfigBuilder: dropdownAnimationConfigHandler, ...portalOptions }}
      {...popupTriggerProps}
    >
      {children}
    </PopupTrigger>
  )
}
