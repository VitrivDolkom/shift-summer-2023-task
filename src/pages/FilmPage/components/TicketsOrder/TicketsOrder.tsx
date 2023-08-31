import { useEffect } from 'react'

import { useCreateOrder, useFilmInfoQuery } from '@/shared/api'

import { ErrorTicketsOrder } from './ErrorTicketsOrder'
import { PendingTicketsOrder } from './PendingTicketsOrder'
import { SuccessTicketsOrder } from './SuccessTicketsOrder'

interface TicketsOrderProps {
  filmId: string
  ticketsOrder?: api.CreateCinemaPaymentDto
}

export const TicketsOrder = ({ filmId, ticketsOrder }: TicketsOrderProps) => {
  const { createOrder, error, isSuccess, data: orderResponse, isLoading } = useCreateOrder()
  const { data: film } = useFilmInfoQuery(filmId)

  useEffect(() => {
    if (!!ticketsOrder) {
      createOrder(ticketsOrder)
    }
  }, [ticketsOrder])

  if (error instanceof Error) {
    return <ErrorTicketsOrder errorMessage={error.message} />
  }

  if (isLoading || !ticketsOrder || !film) {
    return <PendingTicketsOrder />
  }

  if (isSuccess) {
    return (
      <SuccessTicketsOrder
        order={orderResponse.order}
        filmName={film.name}
        date={ticketsOrder.seance.date}
        time={ticketsOrder.seance.time}
      />
    )
  }
}
