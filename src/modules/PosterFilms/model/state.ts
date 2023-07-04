import { PosterFilmsState } from './types'

export const initialState: PosterFilmsState = {
  films: [],
  request: {
    status: 'idle',
    error: undefined
  }
}
