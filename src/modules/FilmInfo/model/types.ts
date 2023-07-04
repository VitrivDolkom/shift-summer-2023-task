import { BaseResponse, RequestInfo } from '@/shared/api'

import { Film } from '../lib/types'

export interface FilmInfoState {
  film?: Film
  request: RequestInfo
}

export interface FilmInfoRequest extends BaseResponse {
  film: Film
}
