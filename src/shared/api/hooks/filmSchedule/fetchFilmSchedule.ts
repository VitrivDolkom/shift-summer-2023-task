import { AxiosError } from 'axios'
import { useQuery } from 'react-query'

import { errorMapping } from '../../errorMapping'
import { getFilmSchedule } from '../../requests'
import { QuerySelect } from '../../types'

export const fetchFilmSchedule = async (id: string) => {
  const response = await getFilmSchedule(id)
  return response.data
}

export const useFilmScheduleQuery = (id: string, select: QuerySelect<api.ScheduleResponse>) =>
  useQuery({
    queryKey: ['filmSchedule', id],
    queryFn: () => fetchFilmSchedule(id),
    select: select,
    onError: (error: AxiosError<api.BaseResponse>) => errorMapping(error, 'Ошибка загрузки расписания')
  })

export const useFilmSchedulesQuery = (id: string) => useFilmScheduleQuery(id, (data) => data.schedules)

export const useDefaultFilmSchedule = (id: string) =>
  useFilmScheduleQuery(id, (data) => data.schedules[0])
