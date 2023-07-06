import { instance } from '@/shared/api'

import { FilmScheduleResponse } from '../model/types'

export const FilmScheduleService = {
  getFilmSchedule: async (id: string) => await instance.get<FilmScheduleResponse>(`/film/${id}/schedule`)
}
