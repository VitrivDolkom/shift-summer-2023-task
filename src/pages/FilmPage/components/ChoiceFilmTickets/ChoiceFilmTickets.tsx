import { useEffect } from 'react'

import { useFilmSchedulesQuery } from '@/modules/FilmSchedule'

import { SeancePlaces } from './SeancePlaces'

import s from './styles.module.css'

interface ChoiceFilmTicketsProps {
  filmId: string
  seance?: api.ScheduleSeance
  onTicketToggle: (ticket: api.FullTicketInfo) => void
  resetTickets: () => void
  tickets: api.FullTicketInfo[]
}

export const ChoiceFilmTickets = (props: ChoiceFilmTicketsProps) => {
  const { filmId, seance, onTicketToggle, tickets, resetTickets } = props
  const { isLoading, isError } = useFilmSchedulesQuery(filmId)

  useEffect(() => {
    resetTickets()
  }, [seance])

  if (isLoading || isError || !seance) {
    return null
  }

  return (
    <div className={s.wrapper}>
      <div className={s.top}>Экран</div>
      <SeancePlaces seance={seance} tickets={tickets} onPlaceClick={onTicketToggle} />
    </div>
  )
}
