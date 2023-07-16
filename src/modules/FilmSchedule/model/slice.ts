import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { initialState } from './state'
import { fetchFilmSchedule } from './thunk'

export const filmScheduleSlice = createSlice({
  name: 'filmSchedule',
  initialState,
  reducers: {
    chooseSchedule(state, action: PayloadAction<api.Schedule>) {
      state.currentSchedule = action.payload
    },
    chooseSeance(state, action: PayloadAction<api.ScheduleSeance>) {
      state.currentSeance = action.payload
    },
    setDefaultSchedule(state) {
      state.currentSchedule = state.schedules[0]
    },
    setDefaultSeance(state) {
      state.currentSeance = state.currentSchedule?.seances[0]
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchFilmSchedule.pending, (state) => {
      state.request.status = 'pending'
    })
    builder.addCase(fetchFilmSchedule.fulfilled, (state, action) => {
      state.request.status = 'success'
      state.schedules = action.payload.schedules
    })
    builder.addCase(fetchFilmSchedule.rejected, (state, action) => {
      state.request.status = 'error'
      state.request.error = action.error.message
    })
  }
})

export const { setDefaultSchedule, setDefaultSeance, chooseSchedule, chooseSeance } =
  filmScheduleSlice.actions
