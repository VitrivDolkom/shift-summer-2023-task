import { instance } from '@/shared/api/'

import { PosterMoviesResponse } from '../model/types'

export const PosterFilmsService = {
  getFilms: async () => await instance.get<PosterMoviesResponse>('/today')
}
