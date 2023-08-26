import { useEffect } from 'react'

import { useFilmInfoQuery } from '@/modules/FilmInfo'
import { useCreateOrder } from '@/modules/TicketsOrder'

import { ErrorTicketsOrder } from './ErrorTicketsOrder'
import { PendingTicketsOrder } from './PendingTicketsOrder'
import { SuccessTicketsOrder } from './SuccessTicketsOrder'

interface TicketsOrderProps {
  filmId: string
  ticketsOrder?: api.CreateCinemaPaymentDto
}

export const TicketsOrder = ({ filmId, ticketsOrder }: TicketsOrderProps) => {
  const { createOrder, error, isSuccess, data: orderResponse } = useCreateOrder()
  const { data: film } = useFilmInfoQuery(filmId)

  useEffect(() => {
    if (!!ticketsOrder) {
      createOrder(ticketsOrder)
    }
  }, [ticketsOrder])

  if (error instanceof Error) {
    return <ErrorTicketsOrder errorMessage={error.message} />
  }

  if (!ticketsOrder || !film || !isSuccess) {
    return <PendingTicketsOrder />
  }

  return (
    <SuccessTicketsOrder
      order={orderResponse}
      filmName={film.name}
      date={ticketsOrder.seance.date}
      time={ticketsOrder.seance.time}
    />
  )
}
