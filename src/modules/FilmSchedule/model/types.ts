import { BaseResponse, RequestInfo } from '@/shared/api'

import { FilmSchedule } from '../lib/types'

export interface FilmScheduleState {
  schedules: FilmSchedule[]
  currentSchedule?: FilmSchedule
  request: RequestInfo
}

export interface FilmScheduleResponse extends BaseResponse {
  schedules: FilmSchedule[]
}
