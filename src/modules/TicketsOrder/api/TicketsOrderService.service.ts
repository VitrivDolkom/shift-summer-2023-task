import { instance } from '@/shared/api'

import { TicketsOrderInfo, TicketsOrderResponse } from '../model/types'

export const TicketsOrderService = {
  postTicketsOrder: async (ticketsOrder: TicketsOrderInfo) =>
    await instance.post<TicketsOrderInfo, TicketsOrderResponse>('/payment', ticketsOrder)
}
