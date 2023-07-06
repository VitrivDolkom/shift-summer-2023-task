import { FilmSeance } from '@/modules/FilmSchedule'
import { SeancePlace, type TicketPlaceInfo } from '@/shared/uikit/SeancePlace'

import s from '../ui/styles.module.css'

interface SeanceSeatsProps {
  seance: FilmSeance
  tickets: TicketPlaceInfo[]
  onPlaceClick: (ticket: TicketPlaceInfo) => void
}

export const SeancePlaces = ({ seance, tickets, onPlaceClick }: SeanceSeatsProps) => (
  <div className={s.places}>
    {seance.hall.places.map((row, rowIndex) => (
      <div key={rowIndex} className={s.row}>
        {row.map((place, index) => {
          const ticketPlaceInfo: TicketPlaceInfo = { row: rowIndex + 1, column: index + 1 }

          return (
            <SeancePlace
              key={index}
              place={place}
              ticketPlaceInfo={ticketPlaceInfo}
              isSelected={tickets.find(
                (ticket) =>
                  ticket.column === ticketPlaceInfo.column && ticket.row === ticketPlaceInfo.row
              ) !== undefined}
              onClick={onPlaceClick}
            />
          )
        })}
      </div>
    ))}
  </div>
)
