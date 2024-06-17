import type { HTMLAttributes } from 'react'
import type { ClassValue } from 'clsx'

declare global {
  type BaseSizeLevel = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none'

  type LiteralUnion<T extends U, U> = T | (U & {})

  interface OptionsItemType {
    label: string
    value: string
  }

  type ReactDivProps = HTMLAttributes<HTMLDivElement>

  interface BaseComponentType<CssVars extends object = never> {
    id?: string
    children?: React.ReactNode
    className?: ClassValue
    style?: React.CSSProperties
    onClick?: React.MouseEventHandler
    /** 重写 css 变量 */
    cssVars?: CssVars
  }

  interface Window {
    navigation?: {
      canGoBack?: boolean
    }
  }
}
