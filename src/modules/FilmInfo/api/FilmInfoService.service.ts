import { instance } from '@/shared/api'

export const FilmInfoService = {
  getFilmInfo: async (id: string) => await instance.get<api.FilmResponse>(`/film/${id}`)
}
