import React from 'react'
import { isPromise } from 'taomu-toolkit'

import { PopupTrigger, type PopupTriggerProps, type PopupTriggerRef, type PopupPortalOptions } from '../popup'
import { Menu, type MenuProps, type MenuItemProps } from '../menu'
import { dropdownAnimationConfigHandler } from './dropdown.utils'

export interface DropdownProps<ContentProps = MenuProps> extends PopupTriggerProps<ContentProps> {
  menus?: MenuProps['items']
  menuProps?: MenuProps
  equalWidth?: PopupPortalOptions['equalWidth']
  onMenuItemClick?: (item: MenuItemProps, index: number, event: React.MouseEvent<HTMLDivElement>) => void
}

export interface DropdownRef extends PopupTriggerRef {}

export const Dropdown = React.forwardRef<DropdownRef | void, DropdownProps>(
  (
    {
      children,
      menus,
      menuProps = {},
      portalOptions = {},
      equalWidth,
      trigger = 'click',
      contentProps = {},
      content,
      onMenuItemClick,
      ...popupTriggerProps
    },
    ref
  ) => {
    const popupTriggerRef = React.useRef<PopupTriggerRef>(null)

    React.useImperativeHandle(ref, () => popupTriggerRef.current || undefined)

    React.useEffect(() => {
      return () => {
        if (popupTriggerRef.current) {
          popupTriggerRef.current.closePopup()
        }
      }
    }, [])

    const contentH = React.useMemo(() => {
      if (content) return content
      return (menuProps: MenuProps & { popupInstance?: any }) => {
        const { onMenuItemClick, popupInstance, ...restMenuProps } = menuProps

        return (
          <Menu
            width="100%"
            onMenuItemClick={async (item, index, event) => {
              const p = onMenuItemClick?.(item, index, event)
              if (isPromise(p)) {
                return p.then(() => {
                  popupTriggerRef.current?.closePopup()
                })
              } else {
                popupTriggerRef.current?.closePopup()
              }
            }}
            {...restMenuProps}
          />
        )
      }
    }, [])

    // if (popupTriggerProps.content === undefined) {
    //   popupTriggerProps.content = (menuProps: MenuProps & { popupInstance?: any }) => {
    //     const { onMenuItemClick, popupInstance, ...restMenuProps } = menuProps

    //     return (
    //       <Menu
    //         width="100%"
    //         onMenuItemClick={(item, index, event) => {
    //           onMenuItemClick?.(item, index, event)
    //           popupTriggerRef.current?.closePopup()
    //         }}
    //         {...restMenuProps}
    //       />
    //     )
    //   }
    // }

    contentProps.items = menus || menuProps.items
    contentProps.onMenuItemClick = onMenuItemClick

    return (
      <PopupTrigger
        ref={popupTriggerRef}
        trigger={trigger}
        contentProps={contentProps}
        portalOptions={{
          equalWidth,
          edgeOffset: 8,
          popupAnimationConfigBuilder: dropdownAnimationConfigHandler,
          ...portalOptions,
        }}
        content={contentH}
        {...popupTriggerProps}
      >
        {children}
      </PopupTrigger>
    )
  }
)
