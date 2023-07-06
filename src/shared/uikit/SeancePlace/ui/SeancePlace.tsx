import { getPlaceClassNames } from '../lib/classNames'
import { SeancePlaceProps } from '../lib/types'
import { getTypeTitle } from '../lib/typeTitle'
import { useHover } from '../lib/useHover'

import s from './styles.module.css'

export const SeancePlace = ({ place, rowIndex, placeIndex }: SeancePlaceProps) => {
  const { isHovered, onHover, onHoverEnd } = useHover()

  return (
    <div className={getPlaceClassNames(place.type)} onMouseEnter={onHover} onMouseLeave={onHoverEnd}>
      {isHovered && (
        <div className={s.info}>
          <div className={s.type}>{getTypeTitle(place.type)}</div>
          <div className={s.rowIndex}>{rowIndex} ряд</div>
          <div className={s.placeIndex}>{placeIndex} место</div>
          <div className={s.price}>{place.price}р</div>
        </div>
      )}
    </div>
  )
}
