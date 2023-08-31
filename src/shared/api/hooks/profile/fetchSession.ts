import { useQuery } from 'react-query'

import { errorMapping } from '@/shared/api'

import { getSession } from '../../requests'

const fetchSession = async (dto: api.CreateAuthorizedRequestDto) => {
  const response = await getSession(dto)
  return response.data
}

export const useFetchSession = (dto: api.CreateAuthorizedRequestDto) =>
  useQuery({
    queryKey: ['fetchSession'],
    queryFn: () => fetchSession(dto),
    select: (data) => data.user,
    onError: (error: unknown) => errorMapping(error, 'Ошибка загрузки профиля')
  })
