import { HallName } from './types'

export const getHallName = (name: HallName): string => {
  if (name === 'Red') return 'Красный зал'
  if (name === 'Blue') return 'Синий зал'
  if (name === 'Green') return 'Зеленый зал'

  return ''
}
