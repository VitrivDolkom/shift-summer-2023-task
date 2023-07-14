export const getTypeTitle = (placeType: api.SeancePlaceType, isSelected = false): string => {
  const selectedText = isSelected ? ' выбран' : ''
  if (placeType === 'ECONOM') return `Эконом${selectedText}`
  if (placeType === 'COMFORT') return `Комфорт${selectedText}`
  if (placeType === 'BLOCKED') return `Занято${selectedText}`

  throw Error('No such seance place')
}
