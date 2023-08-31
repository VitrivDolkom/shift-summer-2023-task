import { useMutation } from 'react-query'

import { errorMapping } from '@/shared/api'

import { postTicketOrder } from '../../requests'

const postOrder = async (dto: api.CreateCinemaPaymentDto) => {
  try {
    const response = await postTicketOrder(dto)

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
