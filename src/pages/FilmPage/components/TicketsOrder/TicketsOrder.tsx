import { useEffect } from 'react'

import { useFilmInfoQuery } from '@/modules/FilmInfo'
import { useTicketOrderMutation } from '@/modules/TicketsOrder'

import { ErrorTicketsOrder } from './ErrorTicketsOrder'
import { PendingTicketsOrder } from './PendingTicketsOrder'
import { SuccessTicketsOrder } from './SuccessTicketsOrder'

interface TicketsOrderProps {
  filmId: string
  ticketsOrder?: api.CreateCinemaPaymentDto
}

export const TicketsOrder = ({ filmId, ticketsOrder }: TicketsOrderProps) => {
  const ticketOrderMutation = useTicketOrderMutation()
  const { data: film } = useFilmInfoQuery(filmId)

  useEffect(() => {
    if (!!ticketsOrder) {
      ticketOrderMutation.mutate(ticketsOrder)
    }
  }, [ticketsOrder])

  if (ticketOrderMutation.isError) {
    return <ErrorTicketsOrder errorMessage="Ошибка создания заказа" />
  }

  if (!ticketsOrder || !film || !ticketOrderMutation.isSuccess) {
    return <PendingTicketsOrder />
  }

  return (
    <SuccessTicketsOrder
      order={ticketOrderMutation.data.data.order}
      filmName={film.name}
      date={ticketsOrder.seance.date}
      time={ticketsOrder.seance.time}
    />
  )
}
