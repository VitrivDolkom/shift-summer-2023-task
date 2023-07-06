import { useAppDispatch, useAppSelector } from '@/store'

import { toggleTicket } from '../model/slice'
import { ChoiceFilmTicketsComponent } from './ChoiceFilmTicketsComponent'

export const ChoiceFilmTickets = () => {
  const dispatch = useAppDispatch()
  const seance = useAppSelector((state) => state.filmSchedule.currentSeance)
  const { tickets } = useAppSelector((state) => state.filmTickets)

  if (!seance) {
    return null
  }

  return (
    <ChoiceFilmTicketsComponent
      seance={seance}
      tickets={tickets}
      onPlaceClick={(ticket) => dispatch(toggleTicket(ticket))}
    />
  )
}
