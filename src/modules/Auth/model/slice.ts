import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { initialState } from './state'
import { createOtpCode, signIn } from './thunk'

export const authInfoSlice = createSlice({
  name: 'authInfo',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(createOtpCode.fulfilled, (state, action) => {
      console.log(action.payload)
      state.codeInfo = action.payload
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
