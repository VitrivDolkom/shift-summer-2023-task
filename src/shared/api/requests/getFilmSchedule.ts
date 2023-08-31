import { myRequest } from './myRequest'

export const getFilmSchedule = async (id: string) =>
  myRequest<api.ScheduleResponse>({ method: 'get', url: `/cinema/film/${id}/schedule` })
