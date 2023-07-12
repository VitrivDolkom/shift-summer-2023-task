import { instance } from '@/shared/api'

export const UserOrdersService = {
  getUserOrders: async ({ token }: api.CreateAuthorizedRequestDto) =>
    await instance.get<api.CinemaOrdersResponse>('/orders', {
      headers: { Authorization: `Bearer ${token}` }
    })
}
