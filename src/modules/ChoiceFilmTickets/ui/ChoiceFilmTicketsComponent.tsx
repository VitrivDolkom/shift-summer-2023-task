import { SeancePlaces } from '../components/SeancePlaces'

import s from './styles.module.css'

interface ChoiceFilmTicketsComponentProps {
  seance: api.ScheduleSeance
  tickets: api.FullTicketInfo[]
  onPlaceClick: (ticket: api.FullTicketInfo) => void
}

export const ChoiceFilmTicketsComponent = ({
  seance,
  tickets,
  onPlaceClick
}: ChoiceFilmTicketsComponentProps) => (
  <div className={s.wrapper}>
    <div className={s.top}>Экран</div>
    <SeancePlaces seance={seance} tickets={tickets} onPlaceClick={onPlaceClick} />
  </div>
)
