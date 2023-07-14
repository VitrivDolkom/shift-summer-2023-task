import classNames from 'classnames/bind'

import { useHover } from '@/shared/lib'
import { Typography } from '@/shared/uikit'

import { getTypeTitle } from './typeTitle'

import s from './styles.module.css'

export interface SeancePlaceProps {
  place?: api.FilmSeancePlace
  onClick?: (ticket: api.FullTicketInfo) => void
  ticketPlaceInfo?: api.FullTicketInfo
  isSelected: boolean
  placeType?: api.SeancePlaceType
}

const cx = classNames.bind(s)

export const SeancePlace = ({
  place,
  ticketPlaceInfo,
  isSelected,
  onClick,
  placeType
}: SeancePlaceProps) => {
  const { isHovered, onHover, onHoverEnd } = useHover()

  if (!place || !onClick || !ticketPlaceInfo || !!placeType) {
    return (
      <div className={s.wrapper}>
        <div
          className={cx({
            place: true,
            econom: placeType === 'ECONOM',
            comfort: placeType === 'COMFORT',
            blocked: placeType === 'BLOCKED',
            active: isSelected && placeType !== 'BLOCKED'
          })}
        ></div>
        <Typography
          className={s.text}
          tag="p"
          variant="t5"
          text={getTypeTitle(placeType || 'BLOCKED', isSelected)}
        />
      </div>
    )
  }

  return (
    <div className={s.wrapper}>
      <div
        className={cx({
          place: true,
          econom: place.type === 'ECONOM',
          comfort: place.type === 'COMFORT',
          blocked: place.type === 'BLOCKED',
          active: isSelected && place.type !== 'BLOCKED'
        })}
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
