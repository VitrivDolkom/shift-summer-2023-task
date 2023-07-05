import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { FilmSchedule } from '../lib/types'
import { initialState } from './state'
import { fetchFilmSchedule } from './thunk'

export const filmScheduleSlice = createSlice({
  name: 'filmSchedule',
  initialState,
  reducers: {
    chooseSchedule(state, action: PayloadAction<FilmSchedule>) {
      state.currentSchedule = action.payload
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
