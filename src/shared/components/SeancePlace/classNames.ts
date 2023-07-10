
import s from './styles.module.css'

export const getPlaceClassNames = (seanceType: api.SeancePlaceType, isSelected: boolean) => {
  const classNames = [s.place]

  if (seanceType === 'ECONOM') classNames.push(s.econom)
  if (seanceType === 'COMFORT') classNames.push(s.comfort)
  if (seanceType === 'BLOCKED') classNames.push(s.blocked)

  if (isSelected && seanceType !== 'BLOCKED') classNames.push(s.active)

  return classNames.join(' ')
}
