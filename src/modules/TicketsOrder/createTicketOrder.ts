import { AxiosResponse } from 'axios'
import { useMutation } from 'react-query'

import { instance } from '@/shared/api'

const createTicketOrder = async (ticketsOrder: api.CreateCinemaPaymentDto) =>
  instance.post<api.CreateCinemaPaymentDto, AxiosResponse<api.PaymentResponse>>('/payment', ticketsOrder)

export const useTicketOrderMutation = () =>
  useMutation({
    mutationFn: (dto: api.CreateCinemaPaymentDto) => createTicketOrder(dto)
  })
