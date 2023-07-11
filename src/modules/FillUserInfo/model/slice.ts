import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { initialState } from './state'

export const userInfoSlice = createSlice({
  name: 'cardInfo',
  initialState,
  reducers: {
    setUserInfo(state, action: PayloadAction<api.CreatePaymentPersonDto>) {
      state.person = action.payload
    }
  }
})

export const { setUserInfo } = userInfoSlice.actions
