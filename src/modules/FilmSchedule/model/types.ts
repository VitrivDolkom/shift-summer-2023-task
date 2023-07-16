import { RequestInfo } from '@/shared/api'

export interface FilmScheduleState {
  schedules: api.Schedule[]
  currentSchedule?: api.Schedule
  currentSeance?: api.ScheduleSeance
  request: RequestInfo
}
