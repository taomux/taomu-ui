import React from 'react'
import clsx from 'clsx'

import { useTaomuClassName, useInlineStyle } from '../../hooks'

import type { InputStatus } from '../input'
import { inputWrapperStyled, inputOutlineStyled, inputStyled } from '../input/input.styled'
import { Dropdown, type DropdownProps } from '../dropdown'
import type { MenuItemProps } from '../menu'

import { selectStyled, SelectCssVars } from './select.styled'

export interface SelectOptionItem extends MenuItemProps {
  value: string | number
}

export interface SelectProps<ValueType = string | number, ItemType = SelectOptionItem>
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
  /** 默认值 */
  defaultValue?: ValueType
  /** 占位符 */
  placeholder?: string
  /** 支持搜索 */
  showSearch?: boolean
  /** 下拉选项 */
  options?: ItemType[]
  /** dropdownProps */
  dropdownProps?: DropdownProps
  /** 值 */
  value?: ValueType
  onChange?: (value: ValueType, item: ItemType) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement, Element>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void
}

export interface SelectRef {
  input: HTMLInputElement | null
  setFocused: (state: boolean) => void
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
      defaultValue,
      showSearch,
      options,
      dropdownProps = {},

      value,
      onChange,
      onFocus,
      onBlur,
      ...wrapProps
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const [focused, setFocused] = React.useState(false)

    const selectClassNames = useTaomuClassName('select', 'flex row center-v gap-6', `status-${status}`, { focused }, className)
    const selectStyle = useInlineStyle<SelectCssVars>(
      { inputWidth: width, inputHeight: height, inputPadding: padding, inputRadius: radius, ...cssVars },
      style
    )

    React.useImperativeHandle(ref, () => {
      return {
        input: inputRef.current,
        setFocused,
      }
    })

    React.useEffect(() => {
      if (focused) {
        inputRef.current?.focus()
      } else {
        inputRef.current?.blur()
      }
    }, [focused])

    const menuItems: MenuItemProps[] = React.useMemo(() => {
      if (!options?.length) return []
      return options.map((item) => {
        return {
          key: item.value,
          label: item.label,
        }
      })
    }, [options])

    return (
      <Dropdown equalWidth="equal" menus={menuItems} {...dropdownProps}>
        <div
          className={selectClassNames}
          style={selectStyle}
          css={[inputWrapperStyled, inputOutlineStyled, selectStyled]}
          {...wrapProps}
        >
          <input
            ref={inputRef}
            css={inputStyled}
            readOnly={!showSearch}
            placeholder={placeholder}
            className={clsx({ cud: !showSearch })}
            onFocus={(e) => {
              setFocused(true)
              onFocus?.(e)
            }}
            onBlur={(e) => {
              setFocused(false)
              onBlur?.(e)
            }}
          />
        </div>
      </Dropdown>
    )
  }
)
