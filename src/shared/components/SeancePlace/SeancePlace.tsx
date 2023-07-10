import { useHover } from '@/shared/lib'

import { getPlaceClassNames } from './classNames'
import { SeancePlaceProps } from './types'
import { getTypeTitle } from './typeTitle'

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
