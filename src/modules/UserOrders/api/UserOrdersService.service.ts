import { AxiosResponse } from 'axios'

import { instance } from '@/shared/api'

export const UserOrdersService = {
  getUserOrders: async ({ token }: api.CreateAuthorizedRequestDto) =>
    await instance.get<api.CinemaOrdersResponse>('/orders', {
      headers: { Authorization: `Bearer ${token}` }
    }),
  cancelUserOrder: async ({ orderId, token }: api.CancelUserOrderDto) =>
    await instance.put<api.CancelUserOrderDto, AxiosResponse<api.BaseResponse>>(
      '/orders/cancel',
      { orderId },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
}
