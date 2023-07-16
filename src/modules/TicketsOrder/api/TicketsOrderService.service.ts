import { AxiosResponse } from 'axios'

import { instance } from '@/shared/api'

export const TicketsOrderService = {
  postTicketsOrder: async (ticketsOrder: api.CreateCinemaPaymentDto) =>
    await instance.post<api.CreateCinemaPaymentDto, AxiosResponse<api.PaymentResponse>>(
      '/payment',
      ticketsOrder
    )
}
