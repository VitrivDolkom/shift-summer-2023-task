import { instance } from '@/shared/api'

import { TicketsOrder, TicketsOrderResponse } from '../model/types'

export const TicketsOrderService = {
  postTicketsOrder: async (ticketsOrder: TicketsOrder) =>
    await instance.post<TicketsOrder, TicketsOrderResponse>('/payment', ticketsOrder)
}
