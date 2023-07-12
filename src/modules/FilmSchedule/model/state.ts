import { FilmScheduleState } from './types'

export const initialState: FilmScheduleState = {
  schedules: [],
  request: {
    status: 'idle'
  }
}
