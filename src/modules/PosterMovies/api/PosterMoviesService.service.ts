import { instance } from '@/shared/api/'

export const PosterMoviesService = {
  getMovies: async () => await instance.get('/today')
}
