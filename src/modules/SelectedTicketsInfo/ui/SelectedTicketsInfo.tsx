import { useAppSelector } from '@/store'

import { getHallName } from '@/shared/lib/schedule'

import { SelectedTicketsInfoComponents } from './SelectedTicketsInfoComponent'

export const SelectedTicketsInfo = () => {
  const { film } = useAppSelector((state) => state.filmInfo)
  const { tickets, price } = useAppSelector((state) => state.filmTickets)
  const { currentSchedule, currentSeance, request } = useAppSelector((state) => state.filmSchedule)

  if (request.status === 'pending' || !film || !currentSchedule || !currentSeance) {
    return null
  }

  return (
    <SelectedTicketsInfoComponents
      tickets={tickets}
      filmName={film.name}
      hallName={getHallName(currentSeance.hall.name)}
      date={currentSchedule.date}
      time={currentSeance.time}
      price={price}
    />
  )
}
