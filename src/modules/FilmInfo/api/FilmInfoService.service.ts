import { instance } from '@/shared/api'

import { FilmInfoResponse } from '../model/types'

export const FilmInfoService = {
  getFilmInfo: async (id: string) => await instance.get<FilmInfoResponse>(`/film/${id}`)
}
