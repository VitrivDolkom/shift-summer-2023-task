import { instance } from '@/shared/api/'

export const PosterFilmsService = {
  getFilms: async () => await instance.get<api.FilmsResponse>('/today')
}
