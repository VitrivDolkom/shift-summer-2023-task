export const getReleaseYear = (releaseDate: string) =>
  releaseDate.split(' ')[releaseDate.split(' ').length - 1]

export const getHallName = (name: api.HallName): string => {
  if (name === 'Red') return 'Красный зал'
  if (name === 'Blue') return 'Синий зал'
  if (name === 'Green') return 'Зеленый зал'

  return ''
}
