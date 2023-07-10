import { TicketPlaceInfo } from '@/shared/uikit/SeancePlace'

import { SeancePlaces } from '../components/SeancePlaces'

import s from './styles.module.css'

interface ChoiceFilmTicketsComponentProps {
  seance: api.ScheduleSeance
  tickets: TicketPlaceInfo[]
  onPlaceClick: (ticket: TicketPlaceInfo) => void
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
