import { useAppDispatch, useAppSelector } from '@/store'
import { useEffect } from 'react'

import { payTicketsOrder } from '../model/thunk'

export const TicketsOrder = () => {
  const dispatch = useAppDispatch()
  const { ticketsOrder, response, request } = useAppSelector((state) => state.ticketsOrder)

  useEffect(() => {
    if (!!ticketsOrder) {
      dispatch(payTicketsOrder(ticketsOrder))
    }
  }, [ticketsOrder])

  if (request.status === 'error') {
    return <div>ERror</div>
  }

  if (request.status === 'pending' || !response) {
    return <div>Loading...</div>
  }

  return <div>{response.order.orderNumber}</div>
}
