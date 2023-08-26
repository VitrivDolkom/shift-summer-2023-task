import { AxiosResponse } from 'axios'
import { useMutation } from 'react-query'

import { errorMapping, instance } from '@/shared/api'

export const cancelUserOrder = async ({ orderId, token }: api.CancelUserOrderDto) => {
  try {
    const response = await instance.put<api.CancelUserOrderDto, AxiosResponse<api.BaseResponse>>(
      '/orders/cancel',
      { orderId },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )

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
