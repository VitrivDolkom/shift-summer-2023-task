import { BaseResponse, RequestInfo } from '@/shared/api'

import { FilmSchedule, FilmSeance } from '../lib/types'

export interface FilmScheduleState {
  schedules: FilmSchedule[]
  currentSchedule?: FilmSchedule
  currentSeance?: FilmSeance
  request: RequestInfo
}

export interface FilmScheduleResponse extends BaseResponse {
  schedules: FilmSchedule[]
}
