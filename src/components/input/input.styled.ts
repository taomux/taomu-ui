import { css } from '@emotion/react'

import { setGlobalCssVars, linkCssVar, parseCssVarDeclareStr } from '../../styles'

export interface InputCssVars {
  inputWidth?: React.CSSProperties['width']
  inputHeight?: React.CSSProperties['height']
  inputPadding?: React.CSSProperties['padding']
  inputRadius?: React.CSSProperties['borderRadius']
  inputTextColor?: string
  inputBackground?: string
  inputBorderColor?: string
  inputIconColor?: string
  inputMainColor?: string
  textareaResize?: React.CSSProperties['resize']
}

setGlobalCssVars('common', {
  inputMainColor: linkCssVar('colorPrimary'),
  inputBorderColor: linkCssVar('colorBorder'),
  inputIconColor: linkCssVar('colorTextGray'),
  inputBackground: 'transparent',
  // inputWidth: '100%',
  // inputHeight: 32,
  // inputPadding: '0 8px',
  // inputRadius: 3,
})

export const inputWrapperStyled = css`
  box-sizing: border-box;
  font-size: inherit;
  font-family: inherit;

  border-radius: ${linkCssVar('inputRadius')};
  width: ${linkCssVar('inputWidth')};
  height: ${linkCssVar('inputHeight')};
  padding: ${linkCssVar('inputPadding')};
  background-color: ${linkCssVar('inputBackground')};
  border: 1px solid ${linkCssVar('inputBorderColor')};

  .icon-x {
    stroke: ${linkCssVar('colorTextLight')};
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }

  &.status-success {
    ${parseCssVarDeclareStr('inputBorderColor', linkCssVar('colorSuccess'))};
    ${parseCssVarDeclareStr('inputMainColor', linkCssVar('colorSuccess'))};
    ${parseCssVarDeclareStr('inputIconColor', linkCssVar('colorSuccess'))};
  }

  &.status-warning {
    ${parseCssVarDeclareStr('inputBorderColor', linkCssVar('colorWarning'))};
    ${parseCssVarDeclareStr('inputMainColor', linkCssVar('colorWarning'))};
    ${parseCssVarDeclareStr('inputIconColor', linkCssVar('colorWarning'))};
  }

  &.status-error {
    ${parseCssVarDeclareStr('inputBorderColor', linkCssVar('colorError'))};
    ${parseCssVarDeclareStr('inputMainColor', linkCssVar('colorError'))};
    ${parseCssVarDeclareStr('inputIconColor', linkCssVar('colorError'))};
  }

  &.status-success,
  &.status-warning,
  &.status-error {
    svg {
      stroke: ${linkCssVar('inputIconColor')};
    }
  }

  ::placeholder,
  input::placeholder {
    color: ${linkCssVar('colorTextLight')};
  }
`

export const inputStyled = css`
  display: inline-block;
  line-height: 1.57;
  font-size: inherit;
  width: 100%;
  border: none;
  outline: none;
  color: ${linkCssVar('inputTextColor')};
  background-color: transparent;
`

export const textareaStyled = css`
  color: ${linkCssVar('inputTextColor')};
  resize: ${linkCssVar('textareaResize')};
`

export const inputOutlineStyled = css`
  transition:
    outline 0.3s cubic-bezier(0.175, 0.82, 0.265, 1),
    border-color 0.3s;
  outline: transparent solid 6px;
  outline-offset: -2px;

  input {
    outline: none;
  }

  &:focus,
  &.focused {
    outline: 2.5px solid color-mix(in srgb, transparent, ${linkCssVar('inputMainColor')} 20%);
    outline-offset: 0;
    border-color: ${linkCssVar('inputMainColor')};
  }
`

declare global {
  interface GlobalCssVars extends InputCssVars {}
}
