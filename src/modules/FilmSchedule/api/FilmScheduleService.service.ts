import { instance } from '@/shared/api'

export const FilmScheduleService = {
  getFilmSchedule: async (id: string) => await instance.get<api.ScheduleResponse>(`/film/${id}/schedule`)
}
