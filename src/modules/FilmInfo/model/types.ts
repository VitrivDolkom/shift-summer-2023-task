import { RequestInfo } from '@/shared/api'

export interface FilmInfoState {
  film?: api.Film
  request: RequestInfo
}
