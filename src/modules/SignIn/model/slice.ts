import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './state'
import { fetchSignIn } from './thunk'

export const signInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSignIn.pending, (state) => {
        state.request.status = 'pending'
      })
      .addCase(fetchSignIn.fulfilled, (state, action) => {
        state.userInfo = action.payload
        state.request.status = 'success'
      })
      .addCase(fetchSignIn.rejected, (state, action) => {
        state.request.status = 'error'
        state.request.error = action.error.message
      })
  }
})
