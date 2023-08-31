import { myRequest } from './myRequest'

export const getFilmInfo = async (id: string) =>
  await myRequest<api.FilmResponse>({ method: 'get', url: `/cinema/film/${id}` })
