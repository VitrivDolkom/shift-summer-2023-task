import { useAppDispatch, useAppSelector } from '@/store'
import { useEffect } from 'react'

import { resetTickets, toggleTicket } from '@/modules/ChoiceFilmTickets'
import { useFilmSchedulesQuery } from '@/modules/FilmSchedule'

import { SeancePlaces } from './SeancePlaces'

import s from './styles.module.css'

interface ChoiceFilmTicketsProps {
  filmId: string
  seance?: api.ScheduleSeance
}

export const ChoiceFilmTickets = ({ filmId, seance }: ChoiceFilmTicketsProps) => {
  const dispatch = useAppDispatch()
  const { isLoading, isError } = useFilmSchedulesQuery(filmId)
  const { tickets } = useAppSelector((state) => state.filmTickets)

  useEffect(() => {
    dispatch(resetTickets())
  }, [seance])

  if (isLoading || isError || !seance) {
    return null
  }

  return (
    <div className={s.wrapper}>
      <div className={s.top}>Экран</div>
      <SeancePlaces
        seance={seance}
        tickets={tickets}
        onPlaceClick={(ticket) => dispatch(toggleTicket(ticket))}
      />
    </div>
  )
}
