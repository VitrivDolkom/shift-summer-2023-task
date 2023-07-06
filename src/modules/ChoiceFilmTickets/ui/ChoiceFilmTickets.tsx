import { useAppDispatch, useAppSelector } from '@/store'
import { useEffect } from 'react'

import { resetTickets, toggleTicket } from '../model/slice'
import { ChoiceFilmTicketsComponent } from './ChoiceFilmTicketsComponent'

export const ChoiceFilmTickets = () => {
  const dispatch = useAppDispatch()
  const { currentSeance, request } = useAppSelector((state) => state.filmSchedule)
  const { tickets } = useAppSelector((state) => state.filmTickets)

  useEffect(() => {
    dispatch(resetTickets())
  }, [currentSeance])

  if (request.status === 'pending' || request.error || !currentSeance) {
    return null
  }

  return (
    <ChoiceFilmTicketsComponent
      seance={currentSeance}
      tickets={tickets}
      onPlaceClick={(ticket) => dispatch(toggleTicket(ticket))}
    />
  )
}
