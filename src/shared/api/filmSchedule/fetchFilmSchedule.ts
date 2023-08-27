import { AxiosError } from 'axios'
import { useQuery } from 'react-query'

import { instance } from '@/shared/api'

export const fetchFilmSchedule = async (id: string) => {
  const response = await instance.get<api.ScheduleResponse>(`/film/${id}/schedule`)
  return response.data
}

export const useFilmScheduleQuery = (id: string, select: (data: api.ScheduleResponse) => any) =>
  useQuery({
    queryKey: ['filmSchedule', id],
    queryFn: () => fetchFilmSchedule(id),
    select: select,
    onError: (error: AxiosError<api.BaseResponse>) =>
      error.response?.data.reason || 'Ошибка загрузки расписания'
  })

export const useFilmSchedulesQuery = (id: string) => useFilmScheduleQuery(id, (data) => data.schedules)

export const useDefaultFilmSchedule = (id: string) =>
  useFilmScheduleQuery(id, (data) => data.schedules[0])
