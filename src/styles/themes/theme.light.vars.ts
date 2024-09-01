import { linkCssVar } from '../'

export const LIGHT_GLOBAL_VARS: GlobalCssVars = {
  colorBackgroundRoot: 'linear-gradient(45deg, #fefffe, #fbfffd)',
  colorBackground: 'linear-gradient(-35deg, #fefffe, #fbfffd)',
  colorBackgroundRgb: '255, 255, 255',
  colorFront: `rgb(${linkCssVar('colorFrontRgb')})`,
  colorFrontRgb: '46, 52, 64',

  colorTextTitle: linkCssVar('colorFront'),
  colorTextDefault: 'rgba(23, 35, 61, 0.8)',
  colorTextGray: 'rgba(81, 90, 110, 0.65)',
  colorTextLight: 'rgba(81, 90, 110, 0.4)',

  colorBorder: 'rgba(0, 0, 0, 0.1)',
  colorBorderSplit: 'rgba(0, 0, 0, 0.06)',

  colorShadow: 'rgba(0, 21, 41, 0.08)',
}
