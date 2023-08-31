import { myRequest } from './myRequest'

export const getSession = async ({ token }: api.CreateAuthorizedRequestDto) =>
  await myRequest<api.SessionResponse>({
    method: 'get',
    url: '/users/session',
    headers: { Authorization: `Bearer ${token}` }
  })
