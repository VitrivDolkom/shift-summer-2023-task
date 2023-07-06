import { getPlaceClassNames } from '../lib/classNames'
import { SeancePlaceProps } from '../lib/types'

import s from './styles.module.css'

export const SeancePlace = ({ place }: SeancePlaceProps) => {
  return (
    <div className={getPlaceClassNames(place.type)}></div>
  )
}
