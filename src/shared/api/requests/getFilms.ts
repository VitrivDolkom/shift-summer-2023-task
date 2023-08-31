import { myRequest } from './myRequest'

export const getFilms = async () =>
  await myRequest<api.FilmsResponse>({ method: 'get', url: '/cinema/today' })
