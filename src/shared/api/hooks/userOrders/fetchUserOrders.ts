import { AxiosError } from 'axios'
import { useQuery } from 'react-query'

import { errorMapping } from '@/shared/api'

import { getOrders } from '../../requests'

export const fetchOrders = async (dto: api.CreateAuthorizedRequestDto) => {
  const response = await getOrders(dto)
  return response.data
}

export const useFetchOrders = (dto: api.CreateAuthorizedRequestDto) =>
  useQuery({
    queryKey: ['userOrders'],
    queryFn: () => fetchOrders(dto),
    select: (data) => data.orders,
    onError: (error: AxiosError<api.BaseResponse>) => errorMapping(error, 'Ошибка получения заказов')
  })
