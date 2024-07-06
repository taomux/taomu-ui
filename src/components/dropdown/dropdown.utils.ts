import type { PopupAnimationConfigBuilder } from '../popup'

export const dropdownAnimationTypeHandler: PopupAnimationConfigBuilder = (positionType, isTargetRelative) => {
  return 'moveTop'
}
