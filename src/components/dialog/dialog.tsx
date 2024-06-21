import React from 'react'
import clsx from 'clsx'

import { Button, ButtonProps } from '../button'
import { IconX } from '../icons'
import { useTaomuClassName, useInlineStyle } from '../../hooks'
import { dialogStyled, DialogCssVars } from './dialog.styled'
import { getShadowClassName, getBorderClassName, getFooterAlignClassName } from './dialog.utils'

export interface DialogProps extends BaseComponentType<DialogCssVars> {
  /** 对话框标题 */
  title?: React.ReactNode | false
  /** 对话框宽度 */
  width?: number | string
  /** 外边框 */
  outerBorder?: boolean | number
  /** 是否显示分割线 */
  splitBorder?: boolean | number
  /** 阴影 */
  shadow?: boolean | BaseSizeLevel

  /** header props */
  headerProps?: ReactDivProps
  /** 是否渲染 footer */
  footer?: boolean
  /** footer props */
  footerProps?: ReactDivProps
  /** footer 对齐方式(横向) */
  footerAlign?: 'left' | 'center' | 'right'
  /** 底部添加额外自定义元素 */
  beforeFooterNodes?: React.ReactNode[]
  /** 底部添加额外自定义元素 */
  afterFooterNodes?: React.ReactNode[]
  /** 展示确认按钮 */
  showOkButton?: boolean
  /** 确认按钮文案 */
  okButtonText?: string
  /** 确认按钮 props */
  okButtonProps?: ButtonProps
  /** 展示取消按钮 */
  showCancelButton?: boolean
  /** 取消按钮文案 */
  cancelButtonText?: string
  /** 取消按钮 props */
  cancelButtonProps?: ButtonProps
  /** 是否显示右上角关闭图标 */
  showCloseIcon?: boolean
  /** 无内容包裹层 */
  noContentWrapper?: boolean

  /** 确认回调 (支持 Promise) */
  onOk?: (res?: any) => void | Promise<any>
  /** 取消回调 (支持 Promise) */
  onCancel?: (res?: any) => void | Promise<any>
  /** 关闭回调 */
  onClose?: () => void
}

export const Dialog: React.FC<DialogProps> = ({
  children,
  className,
  cssVars,
  style,
  title,
  width,
  outerBorder = true,
  splitBorder = true,
  shadow = true,

  headerProps = {},
  footer,
  footerAlign = 'right',
  footerProps = {},
  beforeFooterNodes,
  afterFooterNodes,

  showOkButton = true,
  okButtonText = '确定',
  okButtonProps = {},
  showCancelButton = true,
  cancelButtonText = '取消',
  cancelButtonProps = {},
  showCloseIcon = true,
  noContentWrapper,

  onOk,
  onCancel,
  onClose,

  ...wrapProps
}) => {
  const dialogClassNames = useTaomuClassName(
    'dialog',
    getShadowClassName(shadow),
    getBorderClassName(outerBorder),
    { 'show-close-icon': showCloseIcon },
    className
  )
  const dialogStyle = useInlineStyle<DialogCssVars>({ dialogWidth: width, ...cssVars }, style)

  const [okLoading, setOkLoading] = React.useState(false)
  const [cancelLoading, setCancelLoading] = React.useState(false)

  function handleClose() {
    onClose?.()
  }

  /** 对话框头部 */
  function renderHeader() {
    if (!title) return null

    headerProps.className = clsx(
      'dialog-header flex row center-v',
      getBorderClassName(splitBorder, 'bottom', true),
      headerProps?.className
    )

    return (
      <div {...headerProps}>
        {<h2 className="dialog-title fs-16 text-ellipsis">{title}</h2>}
        <span className="flex-1"></span>
        {renderCloseIcon()}
      </div>
    )
  }

  /** 独立渲染关闭按钮 */
  function renderCloseIcon() {
    if (!showCloseIcon) {
      return null
    }

    return (
      <span className={clsx('close-btn', { disabled: okLoading || cancelLoading })} onClick={handleClose}>
        <IconX size={17} />
      </span>
    )
  }

  function renderFooter() {
    if (footer === false) return null

    footerProps.className = clsx(
      'dialog-footer flex row center-v gap-12',
      getBorderClassName(splitBorder, 'top', true),
      getFooterAlignClassName(footerAlign),
      footerProps?.className
    )

    const footerNodes: React.ReactNode[] = []

    if (beforeFooterNodes?.length) {
      footerNodes.push(...beforeFooterNodes)
    }

    if (showCancelButton) {
      cancelButtonProps.className = clsx('cancel-btn', cancelButtonProps?.className)
      if (!cancelButtonProps.children) {
        cancelButtonProps.children = cancelButtonText
      }
      footerNodes.push(<Button key="cancel" autoLoading={false} loading={cancelLoading} {...cancelButtonProps} />)
    }

    if (showOkButton) {
      okButtonProps.className = clsx('ok-btn', okButtonProps?.className)
      if (!okButtonProps.children) {
        okButtonProps.children = okButtonText
      }
      footerNodes.push(<Button key="ok" type="primary" autoLoading={false} loading={okLoading} {...okButtonProps} />)
    }

    if (afterFooterNodes) {
      footerNodes.push(...afterFooterNodes)
    }

    if (!footerNodes.length) return null

    return <div {...footerProps}>{footerNodes}</div>
  }

  return (
    <div className={dialogClassNames} style={dialogStyle} css={dialogStyled} {...wrapProps}>
      {!title && renderCloseIcon()}
      {renderHeader()}
      {noContentWrapper ? children : <div className="dialog-content">{children}</div>}
      {renderFooter()}
    </div>
  )
}
