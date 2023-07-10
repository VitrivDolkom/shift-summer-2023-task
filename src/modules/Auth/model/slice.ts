import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './state'
import { createOtpCode } from './thunk'

export const authInfoSlice = createSlice({
  name: 'authInfo',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(createOtpCode.fulfilled, (state, action) => {
      debugger
      state.authInfo = action.payload
    })
  }
})
