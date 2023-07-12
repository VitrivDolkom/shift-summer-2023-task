import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './state'
import { fetchPosterMovies } from './thunk'

export const posterFilmsSlice = createSlice({
  name: 'posterFilms',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosterMovies.pending, (state) => {
        state.request.status = 'pending'
      })
      .addCase(fetchPosterMovies.fulfilled, (state, action) => {
        state.request.status = 'success'
        state.films = action.payload.films
      })
      .addCase(fetchPosterMovies.rejected, (state, action) => {
        state.request.status = 'error'
        state.request.error = action.error.message
      })
  }
})
