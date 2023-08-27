import { useQuery } from 'react-query'

import { errorMapping, usersInstance } from '@/shared/api'

const fetchSession = async ({ token }: api.CreateAuthorizedRequestDto) => {
  const response = await usersInstance.get<api.SessionResponse>('/session', {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response.data
}

export const useFetchSession = (dto: api.CreateAuthorizedRequestDto) =>
  useQuery({
    queryKey: ['fetchSession'],
    queryFn: () => fetchSession(dto),
    select: (data) => data.user,
    onError: (error: unknown) => errorMapping(error, 'Ошибка загрузки профиля')
  })
