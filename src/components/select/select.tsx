import React from 'react'
import clsx from 'clsx'

import { useTaomuClassName, useInlineStyle } from '../../hooks'
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
  [key: string]: any
  label: string | number
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

  /** label 字段映射 */
  labelProp?: string
  /** value 字段映射 */
  valueProp?: string
  /** 搜索字段映射 */
  filterProp?: string | string[]

  /** 由 Form.Item 组件传入 */
  name?: string
  /** 值 */
  value?: ValueType
  /** 默认值 */
  defaultValue?: ValueType
  onChange?: (ref: SelectRef, value?: ValueType, item?: ItemType) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement, Element>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export interface SelectTargetRef {
  name?: string
  value?: any
}

export interface SelectRef {
  /** target (react-hook-form 需要此属性) */
  target: SelectTargetRef
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
      name,
      labelProp = 'label',
      valueProp = 'value',
      filterProp = 'label',
      value,

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
    const [searchText, setSearchText] = React.useState('')

    const selectClassNames = useTaomuClassName('select', 'flex row center-v gap-6', `status-${status}`, { focused }, className)
    const selectStyle = useInlineStyle<SelectCssVars>(
      { inputWidth: width, inputHeight: height, inputPadding: padding, inputRadius: radius, ...cssVars },
      style
    )

    React.useImperativeHandle(ref, getSelectRef)

    React.useEffect(() => {
      if (focused) {
        inputRef.current?.focus()
      } else {
        inputRef.current?.blur()
      }
    }, [focused])

    React.useEffect(() => {
      if (showSearch) {
        const item = options?.find((item) => item[valueProp] == value)
        if (item) {
          setSearchText(item?.label?.toString() || '')
        }
      }
    }, [value, showSearch, valueProp])

    const menuItems = React.useMemo(() => {
      const menuOptions: SelectOptionItem[] = []
      if (!options?.length) return menuOptions

      for (let index = 0; index < options.length; index++) {
        const item = options[index]

        if (showSearch && searchText) {
          const filterProps = typeof filterProp === 'string' ? [filterProp] : filterProp
          let isIncluded = false
          for (let filterIndex = 0; filterIndex < filterProps.length; filterIndex++) {
            const filterKey = filterProps[filterIndex]
            if (item[filterKey]?.includes(searchText)) {
              isIncluded = true
              break
            }
          }
          if (!isIncluded) continue
        }

        menuOptions.push({
          name: (item.name || item[valueProp]) ?? index,
          active: selectIndex === index,
          ...item,
        })
      }

      return menuOptions
    }, [options, selectIndex, searchText, filterProp])

    React.useEffect(() => {
      fixSelectIndex()
    }, [value, searchText])

    const displayLabel = React.useMemo(() => {
      if (showSearch) return searchText
      if (value === undefined) return undefined

      const item = options?.find((item) => item[valueProp] == value)
      const label = item?.[labelProp]

      return label || value
    }, [value, options, labelProp, valueProp, searchText, showSearch])

    function getSelectRef(): SelectRef {
      const selectTarget: SelectTargetRef = { name, value }

      return {
        target: selectTarget,
        opened,
        input: inputRef.current,
        dropdown: dropdownRef.current,
        setFocused,
      }
    }

    function handleOnChangeValue(value?: DefaultValueType) {
      const index = options?.findIndex((item) => item.value == value)
      if (index === undefined || index < 0) return
      const item = options?.[index]
      setSelectIndex(index)

      const ref = getSelectRef()
      ref.target.value = value

      onChange?.(ref, item?.[valueProp], item)
    }

    function handleOnChangeIndex(index: number = 0) {
      const item = menuItems?.[index < 0 ? 0 : index]
      if (!item) return
      handleOnChangeValue(item[valueProp])
      closeOptionList()
    }

    function fixSelectIndex() {
      const index = options?.findIndex((item) => item[valueProp] == value)
      setSelectIndex(index)
    }

    function openOptionList() {
      fixSelectIndex()
      if (inputRef.current?.parentElement) {
        setOpened(true)
        dropdownRef.current?.openPopup(inputRef.current.parentElement)
      } else {
        console.warn('Select open field: element not found')
      }
    }

    function closeOptionList() {
      fixSelectIndex()
      setOpened(false)
      dropdownRef.current?.closePopup()
    }

    function handleOnFocus(e: React.FocusEvent<HTMLInputElement, Element>) {
      setFocused(true)
      onFocus?.(e)

      setTimeout(() => {
        if (openOnFocus && !opened && !dropdownRef.current?.popupPortal?.isEnter) {
          openOptionList()
        }
      }, 120)
    }

    function handleOnBlur(e: React.FocusEvent<HTMLInputElement, Element>) {
      setFocused(false)
      onBlur?.(e)
      if (closeOnBlur) {
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
            handleOnChangeIndex(selectIndex)
          } else {
            openOptionList()
          }
          break
        case 'ArrowDown':
          if (opened) {
            e.preventDefault()
            const nextIndex = selectIndex === undefined ? 0 : (selectIndex + 1) % menuItems.length
            setSelectIndex(nextIndex)
          }
          break
        case 'ArrowUp':
          if (opened) {
            e.preventDefault()
            const nextIndex =
              selectIndex === undefined ? menuItems.length - 1 : (selectIndex - 1 + menuItems.length) % menuItems.length
            setSelectIndex(nextIndex)
          }
          break
      }
    }

    function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
      if (!showSearch) return
      setSearchText(e.target.value)
      if (!dropdownRef.current?.popupPortal?.isEnter && inputRef.current) {
        dropdownRef.current?.openPopup(inputRef.current.parentElement)
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
        trigger="click"
        equalWidth="equal"
        menus={menuItems}
        onMenuItemClick={(_, index) => {
          handleOnChangeIndex(index)
        }}
        {...dropdownProps}
        portalOptions={{ escToClose: true, ...dropdownProps?.portalOptions }}
      >
        <div
          className={selectClassNames}
          style={selectStyle}
          css={[inputWrapperStyled, inputOutlineStyled, selectStyled]}
          onKeyDown={handleOnKeyDown}
          {...wrapProps}
        >
          {leftNode}
          <input
            ref={inputRef}
            css={inputStyled}
            readOnly={!showSearch}
            placeholder={placeholder}
            value={displayLabel}
            className={clsx({ cud: !showSearch })}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onChange={handleSearch}
          />
          {renderRightNode()}
        </div>
      </Dropdown>
    )
  }
)
