import { FilmInfoState } from './types'

export const initialState: FilmInfoState = {
  film: undefined,
  request: {
    status: 'idle'
  }
}
