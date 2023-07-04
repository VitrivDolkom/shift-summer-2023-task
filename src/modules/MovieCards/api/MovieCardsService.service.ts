import { instance } from '@/shared/api/'

export const MovieCardsService = {
  getMovies: async () => {
    return await instance.get('/today')
  }
}
