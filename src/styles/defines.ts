import { CssVarsValueType } from 'taomu-toolkit'
import { SerializedStyles } from '@emotion/react'

export type CssVars = Record<string, CssVarsValueType>

export type ThemeMode = 'light' | 'dark' | 'common'

export type RgbColorKeys = keyof Pick<
  GlobalCssVars,
  | 'colorPrimaryRgb'
  | 'colorPrimaryDarkRgb'
  | 'colorBackgroundRgb'
  | 'colorFrontRgb'
  | 'colorSuccessRgb'
  | 'colorInfoRgb'
  | 'colorWarningRgb'
  | 'colorErrorRgb'
>

export const TAOMU_PREFIX = 'taomu'

declare global {
  interface GlobalCssVars {
    /** 主题色 */
    colorPrimary?: string
    /** 主题色 RGB */
    colorPrimaryRgb?: string
    /** 深色主题色 */
    colorPrimaryDark?: string
    /** 深色主题色 RGB */
    colorPrimaryDarkRgb?: string
    /** 背景色 */
    colorBackground?: string
    /** 背景色 RGB */
    colorBackgroundRgb?: string
    /** 底层背景色 */
    colorBackgroundRoot?: string
    /** 前景色 */
    colorFront?: string
    /** 前景色 RGB */
    colorFrontRgb?: string

    colorSuccess?: string
    colorSuccessRgb?: string
    colorInfo?: string
    colorInfoRgb?: string
    colorWarning?: string
    colorWarningRgb?: string
    colorError?: string
    colorErrorRgb?: string

    /** 默认文本颜色 */
    colorTextDefault?: string
    /** 标题颜色 */
    colorTextTitle?: string
    /** 描述文本颜色 */
    colorTextGray?: string
    /** 次要文本颜色 */
    colorTextLight?: string
    /** 链接文本颜色 */
    colorTextLink?: string
    /** 链接文本鼠标悬停颜色 */
    colorTextLinkHover?: string

    /** 边框颜色 */
    colorBorder?: string
    /** 分割线颜色 */
    colorBorderSplit?: string

    /** 阴影颜色 */
    colorShadow?: string
    /** 阴影 XS */
    boxShadowXS?: string
    /** 阴影 SM */
    boxShadowSM?: string
    /** 阴影 MD */
    boxShadowMD?: string
    /** 阴影 LG */
    boxShadowLG?: string
    /** 阴影 XL */
    boxShadowXL?: string

    /** 字体大小 */
    fontSize?: number

    /** 圆角尺寸(小) */
    radiusSM?: number
    /** 圆角尺寸(中) */
    radiusMD?: number
    /** 圆角尺寸(大) */
    radiusLG?: number

    /** 滚动条尺寸 */
    scrollbarSize?: number
    /** 滚动条滑块颜色 */
    scrollbarThumbColor?: string
    /** 滚动条轨道颜色 */
    scrollbarTrackColor?: string
    /** 滚动条滑块悬停颜色 */
    scrollbarThumbHoveColor?: string

    /** 通用过度动画 */
    commonTransition?: string
  }

  type GlobalCssVarsNames = keyof GlobalCssVars
}
