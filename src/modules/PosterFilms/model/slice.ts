import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './state'
import { fetchPosterMovies } from './thunk'

export const posterFilmsSlice = createSlice({
  name: 'posterMovies',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosterMovies.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(fetchPosterMovies.fulfilled, (state, action) => {
        state.status = 'success'
        state.films = action.payload.films
      })
      .addCase(fetchPosterMovies.rejected, (state, action) => {
        state.status = 'error'
        state.error = action.error.message
      })
  }
})
