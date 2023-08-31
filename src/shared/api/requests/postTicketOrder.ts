import { AxiosResponse } from 'axios'

import { myRequest } from './myRequest'

export const postTicketOrder = async (dto: api.CreateCinemaPaymentDto) =>
  await myRequest<api.CreateCinemaPaymentDto, AxiosResponse<api.PaymentResponse>>({
    method: 'post',
    url: 'cinema/payment',
    data: dto
  })
