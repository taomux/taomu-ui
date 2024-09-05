import { mixinRgba, linkCssVar } from '../'

export const DARK_GLOBAL_VARS: GlobalCssVars = {
  colorPrimaryDark: '#768c2e',
  colorPrimaryDarkRgb: '118, 140, 46',

  colorBackgroundRoot: 'linear-gradient(45deg, #202020, #181e20)',
  colorBackground: 'linear-gradient(-35deg, #202020, #181e20)',
  colorBackgroundRgb: '25, 29, 36',
  // colorBackgroundRgb: '35, 41, 51',
  colorFront: `rgb(${linkCssVar('colorFrontRgb')})`,
  colorFrontRgb: '255, 255, 255',

  colorTextTitle: linkCssVar('colorFront'),
  colorTextDefault: mixinRgba('colorFrontRgb', 0.9),
  colorTextGray: mixinRgba('colorFrontRgb', 0.65),
  colorTextLight: mixinRgba('colorFrontRgb', 0.4),

  colorBorder: mixinRgba('colorFrontRgb', 0.1),
  colorBorderSplit: mixinRgba('colorFrontRgb', 0.06),

  colorShadow: 'rgba(0, 21, 41, 0.28)',
}
