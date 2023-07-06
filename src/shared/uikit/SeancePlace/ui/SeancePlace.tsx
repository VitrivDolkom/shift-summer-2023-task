import { getPlaceClassNames } from '../lib/classNames'
import { SeancePlaceProps } from '../lib/types'
import { getTypeTitle } from '../lib/typeTitle'
import { useHover } from '../lib/useHover'

import s from './styles.module.css'

export const SeancePlace = ({ place, ticketPlaceInfo, isSelected, onClick }: SeancePlaceProps) => {
  const { isHovered, onHover, onHoverEnd } = useHover()

  return (
    <div className={s.wrapper}>
      <div
        className={getPlaceClassNames(place.type, isSelected)}
        onMouseEnter={onHover}
        onMouseLeave={onHoverEnd}
        onClick={() => onClick(ticketPlaceInfo)}
      ></div>
      {isHovered && (
        <div className={s.info}>
          <div className={s.type}>{getTypeTitle(place.type)}</div>
          <div className={s.rowIndex}>{ticketPlaceInfo.row} ряд</div>
          <div className={s.placeIndex}>{ticketPlaceInfo.column} место</div>
          <div className={s.price}>{place.price}р</div>
        </div>
      )}
    </div>
  )
}
