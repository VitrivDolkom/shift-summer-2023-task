import { SeancePlaceType } from './types'

export const getTypeTitle = (placeType: SeancePlaceType): string => {
  if (placeType === 'ECONOM') return 'Эконом'
  if (placeType === 'COMFORT') return 'Комфорт'
  if (placeType === 'BLOCKED') return 'Занято'

  return ''
}
