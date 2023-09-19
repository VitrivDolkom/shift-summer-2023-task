import { AxiosError } from 'axios'
import { useQuery } from 'react-query'

import { errorMapping } from '../../errorMapping'
import { getFilmSchedule } from '../../requests'

export const fetchFilmSchedule = async (id: string) => {
  const response = await getFilmSchedule(id)
  return response.data
}

export const useFilmSchedulesQuery = (id: string) =>
  useQuery({
    queryKey: ['filmSchedule', id],
    queryFn: () => fetchFilmSchedule(id),
    select: (data) => data.schedules,
    onError: (error: AxiosError<api.BaseResponse>) => errorMapping(error, 'Ошибка загрузки расписания')
  })

export const useDefaultFilmSchedule = (id: string) =>
  useQuery({
    queryKey: ['filmSchedule', id],
    queryFn: () => fetchFilmSchedule(id),
    select: (data) => data.schedules[0],
    onError: (error: AxiosError<api.BaseResponse>) => errorMapping(error, 'Ошибка загрузки расписания')
  })
