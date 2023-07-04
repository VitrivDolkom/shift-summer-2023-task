import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './state'
import { fetchFilmInfo } from './thunk'

export const filmInfoSlice = createSlice({
  name: 'filmInfo',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchFilmInfo.pending, (state) => {
      state.request.status = 'idle'
    })
    builder.addCase(fetchFilmInfo.fulfilled, (state, action) => {
      state.request.status = 'success'
      state.film = action.payload.film
    })
    builder.addCase(fetchFilmInfo.rejected, (state, action) => {
      state.request.status = 'error'
      state.request.error = action.error.message
    })
  }
})
