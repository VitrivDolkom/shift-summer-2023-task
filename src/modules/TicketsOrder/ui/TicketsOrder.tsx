import { useAppDispatch, useAppSelector } from '@/store'
import { useEffect } from 'react'

import { payTicketsOrder } from '../model/thunk'

export const TicketsOrder = () => {
  const dispatch = useAppDispatch()
  const { ticketsOrder, response } = useAppSelector((state) => state.ticketsOrder)

  useEffect(() => {
    if (!!ticketsOrder) {
      dispatch(payTicketsOrder(ticketsOrder))
    }
  }, [ticketsOrder])

  return <div>{response?.order?.orderNumber}</div>
}
