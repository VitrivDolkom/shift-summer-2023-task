import { AxiosResponse } from 'axios'

import { myRequest } from './myRequest'

export const putOrder = async ({ orderId, token }: api.CancelUserOrderDto) =>
  await myRequest<api.CancelUserOrderDto, AxiosResponse<api.BaseResponse>>({
    method: 'put',
    url: '/cinema/orders/cancel',
    data: { orderId },
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
