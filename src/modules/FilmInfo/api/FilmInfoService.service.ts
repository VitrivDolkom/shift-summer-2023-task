import { instance } from '@/shared/api'

import { FilmInfoRequest } from '../model/types'

export const FilmInfoService = {
  getFilmInfo: async (id: string) => instance.get<FilmInfoRequest>(`/film/${id}`)
}
