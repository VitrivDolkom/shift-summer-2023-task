import { Film } from '@/modules/FilmInfo'
import { BaseResponse, RequestInfo } from '@/shared/api'

export interface PosterFilmsState {
  films: Film[]
  request: RequestInfo
}

export interface PosterMoviesResponse extends BaseResponse {
  films: Film[]
}
