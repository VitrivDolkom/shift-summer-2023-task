import { useAppDispatch, useAppSelector } from '@/store'
import { useEffect } from 'react'

import { useFilmInfoQuery } from '@/modules/FilmInfo'
import { payTicketsOrder } from '@/modules/TicketsOrder'

import { ErrorTicketsOrder } from './ErrorTicketsOrder'
import { PendingTicketsOrder } from './PendingTicketsOrder'
import { SuccessTicketsOrder } from './SuccessTicketsOrder'

interface TicketsOrderProps {
  filmId: string
}

export const TicketsOrder = ({ filmId }: TicketsOrderProps) => {
  const dispatch = useAppDispatch()
  const { ticketsOrder, response, request } = useAppSelector((state) => state.ticketsOrder)
  const { data: film } = useFilmInfoQuery(filmId)

  useEffect(() => {
    if (!!ticketsOrder) {
      dispatch(payTicketsOrder(ticketsOrder))
    }
  }, [ticketsOrder])

  if (request.status === 'error' || request?.error) {
    return <ErrorTicketsOrder errorMessage={request?.error || ''} />
  }

  if (!ticketsOrder || request.status === 'pending' || !film || !response) {
    return <PendingTicketsOrder />
  }

  return (
    <SuccessTicketsOrder
      order={response.order}
      filmName={film.name}
      date={ticketsOrder.seance.date}
      time={ticketsOrder.seance.time}
    />
  )
}
