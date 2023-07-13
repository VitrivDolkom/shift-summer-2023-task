import { SeancePlace } from '@/shared/components'
import { Typography } from '@/shared/uikit'

import s from './styles.module.css'

interface SeanceSeatsProps {
  seance: api.ScheduleSeance
  tickets: api.FullTicketInfo[]
  onPlaceClick: (ticket: api.FullTicketInfo) => void
}

export const SeancePlaces = ({ seance, tickets, onPlaceClick }: SeanceSeatsProps) => (
  <div className={s.places}>
    {seance.hall.places.map((row, rowIndex) => (
      <div key={rowIndex} className={s.row}>
        <div className={s.rowIndex}>
          <Typography className={s.index} text={rowIndex.toString()} />
        </div>
        {row.map((place, index) => {
          const ticketPlaceInfo: api.FullTicketInfo = { row: rowIndex + 1, column: index + 1, ...place }

          return (
            <SeancePlace
              key={index}
              place={place}
              ticketPlaceInfo={ticketPlaceInfo}
              isSelected={
                tickets.find(
                  (ticket) =>
                    ticket.column === ticketPlaceInfo.column && ticket.row === ticketPlaceInfo.row
                ) !== undefined
              }
              onClick={onPlaceClick}
            />
          )
        })}
        <div className={s.rowIndex}>
          <Typography className={s.index} text={rowIndex.toString()} />
        </div>
      </div>
    ))}
  </div>
)
