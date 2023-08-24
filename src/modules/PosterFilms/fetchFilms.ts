import { useQuery } from 'react-query'

import { instance } from '@/shared/api'

export const fetchFilms = async (): Promise<api.FilmsResponse> => {
  const response = await instance.get<api.FilmsResponse>('/today')

  return response.data
}

export const useFilmsQuery = () =>
  useQuery({
    queryKey: ['films'],
    queryFn: fetchFilms,
    select: (data) => data.films
  })
