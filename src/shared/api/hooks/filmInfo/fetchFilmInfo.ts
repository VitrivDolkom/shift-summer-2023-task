import { useQuery } from 'react-query'

import { getFilmInfo } from '../../requests'

const fetchFilmInfo = async (id: string) => {
  const response = await getFilmInfo(id)
  return response.data
}

export const useFilmInfoQuery = (id: string) =>
  useQuery({ queryKey: ['filmInfo', id], queryFn: () => fetchFilmInfo(id), select: (data) => data.film })
