import { mixinRgba, linkCssVar } from '../'

export const DARK_GLOBAL_VARS: GlobalCssVars = {
  colorBackground: `rgb(${linkCssVar('colorBackgroundRgb')})`,
  colorBackgroundRgb: '46, 52, 64',
  colorFront: `rgb(${linkCssVar('colorFrontRgb')})`,
  colorFrontRgb: '255, 255, 255',

  colorTextTitle: linkCssVar('colorFront'),
  colorTextDefault: mixinRgba('colorFrontRgb', 0.9),
  colorTextGray: mixinRgba('colorFrontRgb', 0.7),
  colorTextLight: mixinRgba('colorFrontRgb', 0.4),

  colorBorder: mixinRgba('colorFrontRgb', 0.1),
  colorBorderSplit: mixinRgba('colorFrontRgb', 0.06),

  colorShadow: 'rgba(0, 21, 41, 0.28)',
}
