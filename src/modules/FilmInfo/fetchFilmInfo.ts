import { useQuery } from 'react-query'

import { instance } from '@/shared/api'

const fetchFilmInfo = async (id: string) => {
  const response = await instance.get<api.FilmResponse>(`/film/${id}`)
  return response.data
}

export const useFilmInfoQuery = (id: string) =>
  useQuery({ queryKey: ['filmInfo', id], queryFn: () => fetchFilmInfo(id), select: (data) => data.film })
