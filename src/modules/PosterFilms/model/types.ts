import { RequestInfo } from '@/shared/api'

export interface PosterFilmsState {
  films: api.Film[]
  request: RequestInfo
}
