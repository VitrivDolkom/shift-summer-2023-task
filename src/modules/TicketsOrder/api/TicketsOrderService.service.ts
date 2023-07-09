import { AxiosError, AxiosResponse } from 'axios'

import { instance } from '@/shared/api'

import { TicketsOrderError, TicketsOrderInfo, TicketsOrderResponse } from '../model/types'

export const TicketsOrderService = {
  postTicketsOrder: async (ticketsOrder: TicketsOrderInfo) =>
    await instance.post<TicketsOrderInfo, AxiosResponse<TicketsOrderResponse>>('/payment', ticketsOrder)
}
