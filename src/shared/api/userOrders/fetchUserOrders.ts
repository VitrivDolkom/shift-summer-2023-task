import { AxiosError } from 'axios'
import { useQuery } from 'react-query'

import { errorMapping, instance } from '@/shared/api'

export const fetchOrders = async ({ token }: api.CreateAuthorizedRequestDto) => {
  const response = await instance.get<api.CinemaOrdersResponse>('/orders', {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response.data
}

export const useFetchOrders = (dto: api.CreateAuthorizedRequestDto) =>
  useQuery({
    queryKey: ['userOrders'],
    queryFn: () => fetchOrders(dto),
    select: (data) => data.orders,
    onError: (error: AxiosError<api.BaseResponse>) => errorMapping(error, 'Ошибка получения заказов')
  })
