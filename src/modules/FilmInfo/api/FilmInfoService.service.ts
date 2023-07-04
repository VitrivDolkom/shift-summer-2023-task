import { instance } from '@/shared/api'

import { FilmInfoRequest } from '../model/types'

export const FilmInfoService = {
  getFilmInfo: async (id: string) => await instance.get<FilmInfoRequest>(`/film/${id}`)
}
