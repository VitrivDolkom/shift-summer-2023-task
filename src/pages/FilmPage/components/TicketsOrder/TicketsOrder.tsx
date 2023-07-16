import { useAppDispatch, useAppSelector } from '@/store'
import { useEffect } from 'react'

import { payTicketsOrder } from '@/modules/TicketsOrder'

import { ErrorTicketsOrder } from './ErrorTicketsOrder'
import { PendingTicketsOrder } from './PendingTicketsOrder'
import { SuccessTicketsOrder } from './SuccessTicketsOrder'

export const TicketsOrder = () => {
  const dispatch = useAppDispatch()
  const { ticketsOrder, response, request } = useAppSelector((state) => state.ticketsOrder)
  const { film } = useAppSelector((state) => state.filmInfo)

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
