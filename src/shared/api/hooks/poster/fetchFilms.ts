import { useQuery } from 'react-query'

import { getFilms } from '../../requests'

export const fetchFilms = async (): Promise<api.FilmsResponse> => {
  const response = await getFilms()
  return response.data
}

export const useFilmsQuery = () =>
  useQuery({
    queryKey: ['films'],
    queryFn: fetchFilms,
    select: (data) => data.films
  })
