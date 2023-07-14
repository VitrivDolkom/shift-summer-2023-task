import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { initialState } from './state'
import { createOtpCode } from './thunk'

export const authInfoSlice = createSlice({
  name: 'authInfo',
  initialState,
  reducers: {
    setOtpCodeError(state, action: PayloadAction<string>) {
      state.request.error = action.payload
      state.request.status = 'error'
    }
  },
  extraReducers(builder) {
    builder.addCase(createOtpCode.fulfilled, (state, action) => {
      state.request.status = 'success'
      state.otpResponse = action.payload
    })
    builder.addCase(createOtpCode.pending, (state) => {
      state.request.status = 'pending'
    })
    builder.addMatcher(isError, (state, action: PayloadAction<string>) => {
      state.request.status = 'error'
      state.request.error = action.payload
    })
  }
})

export const isError = (action: AnyAction) => action.type.endsWith('rejected')

export const { setOtpCodeError } = authInfoSlice.actions
