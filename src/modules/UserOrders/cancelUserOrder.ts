import { AxiosError, AxiosResponse } from 'axios'
import { useMutation } from 'react-query'

import { instance } from '@/shared/api'

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

    return response.data
  } catch (error: unknown) {
    throw new Error(
      (error as AxiosError<api.BaseResponse>).response?.data.reason || 'Ошибка отмены заказа'
    )
  }
}

export const useCancelOrderMutation = () =>
  useMutation({
    mutationFn: (dto: api.CancelUserOrderDto) => cancelUserOrder(dto)
  })
