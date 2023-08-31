import { myRequest } from './myRequest'

export const getOrders = async ({ token }: api.CreateAuthorizedRequestDto) =>
  await myRequest<api.CinemaOrdersResponse>({
    method: 'get',
    url: '/cinema/orders',
    headers: { Authorization: `Bearer ${token}` }
  })
