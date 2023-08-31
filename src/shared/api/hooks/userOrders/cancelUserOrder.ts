import { useMutation } from 'react-query'

import { errorMapping } from '@/shared/api'

import { putOrder } from '../../requests'

export const cancelUserOrder = async (dto: api.CancelUserOrderDto) => {
  try {
    const response = await putOrder(dto)

    return response
  } catch (error: unknown) {
    throw new Error(errorMapping(error, 'Ошибка отмены заказа'))
  }
}

export const useCancelOrder = () => {
  const { mutate: cancelOrder, error: cancelOrderError } = useMutation({
    mutationFn: (dto: api.CancelUserOrderDto) => cancelUserOrder(dto)
  })

  return { cancelOrder, cancelOrderError }
}
