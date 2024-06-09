import { linkCssVar, mixinRgba } from '../'

export const COMMON_GLOBAL_VARS: GlobalCssVars = {
  colorPrimary: '#a2c339',
  colorPrimaryRgb: '162, 195, 57',

  colorSuccess: '#52c41a',
  colorSuccessRgb: '82, 196, 26',
  colorInfo: '#1890ff',
  colorInfoRgb: '24, 144, 255',
  colorWarning: '#ff9900',
  colorWarningRgb: '255, 153, 0',
  colorError: '#ff5257',
  colorErrorRgb: '255, 82, 87',

  colorTextLink: linkCssVar('colorInfo'),
  colorTextLinkHover: mixinRgba('colorInfoRgb', 0.75),

  fontSize: 16,

  radiusSM: 4,
  radiusMD: 8,
  radiusLG: 16,
}
