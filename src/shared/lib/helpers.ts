import { TOKEN_KEY } from '../const'

export const getReleaseYear = (releaseDate: string) =>
  releaseDate.split(' ')[releaseDate.split(' ').length - 1]

export const getHallName = (name: api.HallName): string => {
  if (name === 'Red') return 'Красный зал'
  if (name === 'Blue') return 'Синий зал'
  if (name === 'Green') return 'Зеленый зал'

  return ''
}

export const setToLocalStorage = <T>(key: string, value: T) => {
  if (typeof value !== 'string') localStorage.setItem(key, JSON.stringify(value))
  localStorage.setItem(key, value as string)
}

export const getFromLocalStorage = <T>(key: string, defaultValue: T): T => {
  const item = localStorage.getItem(key)

  if (item === null) {
    setToLocalStorage(key, defaultValue)
    return defaultValue
  }

  if (key === TOKEN_KEY) return item as T

  return JSON.parse(item)
}
