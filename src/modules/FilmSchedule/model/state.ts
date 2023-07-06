import { FilmScheduleState } from './types'

export const initialState: FilmScheduleState = {
  schedules: [],
  currentSchedule: undefined,
  currentSeance: undefined,
  request: {
    status: 'idle',
    error: undefined
  }
}
