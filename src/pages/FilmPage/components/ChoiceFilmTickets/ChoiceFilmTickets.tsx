import { useAppDispatch, useAppSelector } from '@/store'
import { useEffect } from 'react'

import { resetTickets, toggleTicket } from '@/modules/ChoiceFilmTickets'

import { SeancePlaces } from './SeancePlaces'

import s from './styles.module.css'

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
    <div className={s.wrapper}>
      <div className={s.top}>Экран</div>
      <SeancePlaces
        seance={currentSeance}
        tickets={tickets}
        onPlaceClick={(ticket) => dispatch(toggleTicket(ticket))}
      />
      
    </div>
  )
}
