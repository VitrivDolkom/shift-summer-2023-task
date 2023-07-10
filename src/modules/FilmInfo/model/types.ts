import { BaseResponse, RequestInfo } from '@/shared/api'


export interface FilmInfoState {
  film?: api.Film
  request: RequestInfo
}

export interface FilmInfoResponse extends BaseResponse {
  film: api.Film
}
