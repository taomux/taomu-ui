import React from 'react'
import clsx from 'clsx'

import { useTaomuClassName, useInlineStyle, useMergedState } from '../../hooks'
import { linkCssVar } from '../../styles'

import type { InputStatus } from '../input'
import { inputWrapperStyled, inputOutlineStyled, inputStyled } from '../input/input.styled'
import { Dropdown, type DropdownProps, type DropdownRef } from '../dropdown'
import type { MenuItemProps } from '../menu'
import { Loading } from '../loading'
import { IconSearch, IconChevronUp, IconChevronDown } from '../icons'

import { selectStyled, SelectCssVars } from './select.styled'

type DefaultValueType = string | number

export interface SelectOptionItem extends MenuItemProps {
  value: DefaultValueType
}

export interface SelectProps<ValueType = DefaultValueType, ItemType = SelectOptionItem>
  extends Omit<BaseComponentType<SelectCssVars>, 'children'> {
  /** 状态 */
  status?: InputStatus
  /** 显示清除按钮 */
  allowClear?: boolean
  /** 外围宽度 */
  width?: React.CSSProperties['width']
  /** 外围高度 */
  height?: React.CSSProperties['height']
  /** 外围 padding */
  padding?: React.CSSProperties['padding']
  /** 圆角 */
  radius?: React.CSSProperties['borderRadius']
  /** 左侧扩展元素 */
  leftNode?: React.ReactNode
  /** 右侧扩展元素 */
  rightNode?: React.ReactNode

  /** 占位符 */
  placeholder?: string
  /** 支持搜索 */
  showSearch?: boolean
  /** 下拉选项 */
  options?: ItemType[]
  /** dropdownProps */
  dropdownProps?: DropdownProps
  /** 是否正在加载 */
  loading?: boolean
  /** 默认打开状态 */
  defaultOpened?: boolean
  /** 聚焦时自动打开 */
  openOnFocus?: boolean
  /** 失去焦点时关闭 */
  closeOnBlur?: boolean
  /** 值 */
  value?: ValueType
  /** 默认值 */
  defaultValue?: ValueType
  onChange?: (value?: ValueType, item?: ItemType) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement, Element>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export interface SelectRef {
  dropdown: DropdownRef | null
  input: HTMLInputElement | null
  setFocused: (state: boolean) => void
  opened: boolean
}

export const Select = React.forwardRef<SelectRef, SelectProps>(
  (
    {
      className,
      cssVars,
      style,
      status = 'default',
      allowClear,
      width = '100%',
      height = 32,
      padding = '0 8px',
      placeholder,
      radius,
      leftNode,
      rightNode,
      showSearch,
      options,
      loading,
      defaultOpened = false,
      openOnFocus,
      closeOnBlur = true,

      dropdownProps = {},

      onChange,
      onFocus,
      onBlur,
      onKeyDown,
      ...wrapProps
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const dropdownRef = React.useRef<DropdownRef>(null)
    const [focused, setFocused] = React.useState(false)
    const [opened, setOpened] = React.useState(defaultOpened)
    const [selectIndex, setSelectIndex] = React.useState<number>()

    const [value, setValue] = useMergedState<DefaultValueType | undefined>(wrapProps.defaultValue, {
      value: wrapProps.value,
      onChange: handleOnChange,
    })

    const selectClassNames = useTaomuClassName('select', 'flex row center-v gap-6', `status-${status}`, { focused }, className)
    const selectStyle = useInlineStyle<SelectCssVars>(
      { inputWidth: width, inputHeight: height, inputPadding: padding, inputRadius: radius, ...cssVars },
      style
    )

    React.useImperativeHandle(ref, () => {
      return {
        opened,
        input: inputRef.current,
        dropdown: dropdownRef.current,
        setFocused,
      }
    })

    React.useEffect(() => {
      if (opened) {
        if (inputRef.current?.parentElement) {
          dropdownRef.current?.openPopup(inputRef.current.parentElement)
        } else {
          console.warn('Select open field: element not found')
        }
      } else {
        dropdownRef.current?.closePopup()
      }
    }, [opened])

    React.useEffect(() => {
      const index = options?.findIndex((item) => item.value === value)
      setSelectIndex(index)
    }, [value])

    React.useEffect(() => {
      if (focused) {
        inputRef.current?.focus()
      } else {
        inputRef.current?.blur()
      }
    }, [focused])

    const menuItems: MenuItemProps[] = React.useMemo(() => {
      if (!options?.length) return []
      return options.map(({ key, value, ...rests }, index) => {
        return {
          key: (key || value) ?? index,
          active: selectIndex === value,
          ...rests,
        }
      })
    }, [options, selectIndex])

    function handleOnChange(value?: DefaultValueType) {
      setValue(value)
    }

    function openOptionList() {
      setOpened(true)
    }

    function closeOptionList() {
      setOpened(false)
    }

    function handleOnFocus(e: React.FocusEvent<HTMLInputElement, Element>) {
      setFocused(true)
      onFocus?.(e)
      if (openOnFocus) {
        openOptionList()
      }
    }

    function handleOnBlur(e: React.FocusEvent<HTMLInputElement, Element>) {
      setFocused(false)
      onBlur?.(e)
      if (closeOnBlur) {
        closeOptionList()
      }
    }

    function handleOnMouseDown() {
      if (!opened) {
        openOptionList()
      } else if (dropdownRef.current?.popupPortal?.isEnter && opened) {
        closeOptionList()
      }
    }

    function handleOnKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
      onKeyDown?.(e)

      switch (e.key) {
        case 'Escape':
          closeOptionList()
          break
        case 'Enter':
          if (opened) {
            handleOnChange(selectIndex)
          } else {
            openOptionList()
          }
          break
        case 'ArrowDown':
          if (opened) {
            // const currentIndex = selectIndex
            const nextIndex = selectIndex === undefined ? 0 : (selectIndex + 1) % menuItems.length
            setSelectIndex(nextIndex)
          } else {
            openOptionList()
          }
          break
      }
    }

    function renderRightNode() {
      if (rightNode) return rightNode

      if (loading) {
        return <Loading size={16} weight={2} />
      } else if (showSearch && focused) {
        return <IconSearch size={16} color={linkCssVar('colorTextGray')} />
      } else if (opened) {
        return <IconChevronUp size={16} color={linkCssVar('colorTextGray')} />
      } else {
        return <IconChevronDown size={16} color={linkCssVar('colorTextGray')} />
      }
    }

    return (
      <Dropdown
        ref={dropdownRef}
        trigger="none"
        equalWidth="equal"
        menus={menuItems}
        {...dropdownProps}
        portalOptions={{ escToClose: true, ...dropdownProps?.portalOptions }}
      >
        <div
          className={selectClassNames}
          style={selectStyle}
          css={[inputWrapperStyled, inputOutlineStyled, selectStyled]}
          onMouseDown={handleOnMouseDown}
          onKeyDown={handleOnKeyDown}
          {...wrapProps}
        >
          {leftNode}
          <input
            ref={inputRef}
            css={inputStyled}
            readOnly={!showSearch}
            placeholder={placeholder}
            className={clsx({ cud: !showSearch })}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
          />
          {renderRightNode()}
        </div>
      </Dropdown>
    )
  }
)
