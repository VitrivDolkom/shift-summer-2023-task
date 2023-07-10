export const getTypeTitle = (placeType: api.SeancePlaceType): string => {
  if (placeType === 'ECONOM') return 'Эконом'
  if (placeType === 'COMFORT') return 'Комфорт'
  if (placeType === 'BLOCKED') return 'Занято'

  throw Error('No such seance place')
}
