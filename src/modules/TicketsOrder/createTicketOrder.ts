import { AxiosResponse } from 'axios'
import { useMutation } from 'react-query'

import { errorMapping, instance } from '@/shared/api'

const postOrder = async (ticketsOrder: api.CreateCinemaPaymentDto) => {
  try {
    const response = await instance.post<api.CreateCinemaPaymentDto, AxiosResponse<api.CinemaOrder>>(
      '/payment',
      ticketsOrder
    )

    return response.data
  } catch (error: unknown) {
    throw new Error(errorMapping(error, 'Ошибка создания заказа'))
  }
}

export const useCreateOrder = () => {
  const { mutate: createOrder, ...other } = useMutation({
    mutationFn: (dto: api.CreateCinemaPaymentDto) => postOrder(dto)
  })

  return { createOrder, ...other }
}
