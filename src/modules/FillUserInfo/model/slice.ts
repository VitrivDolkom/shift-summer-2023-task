import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { initialState } from './state'
import { UserInfo } from './types'

export const userInfoSlice = createSlice({
  name: 'cardInfo',
  initialState,
  reducers: {
    setUserInfo(state, action: PayloadAction<UserInfo>) {
      state.person = action.payload
    }
  }
})

export const { setUserInfo } = userInfoSlice.actions
