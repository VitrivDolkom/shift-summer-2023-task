import { AxiosError } from 'axios'
import { useQuery } from 'react-query'

import { instance } from '@/shared/api'

export const fetchUserOrders = async ({ token }: api.CreateAuthorizedRequestDto) => {
  const response = await instance.get<api.CinemaOrdersResponse>('/orders', {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response.data
}

export const useFetchUserOrdersQuery = (dto: api.CreateAuthorizedRequestDto) =>
  useQuery({
    queryKey: ['userOrders'],
    queryFn: () => fetchUserOrders(dto),
    select: (data) => data.orders,
    onError: (error: AxiosError<api.BaseResponse>) =>
      error.response?.data.reason || 'Ошибка получения заказов'
  })
