import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { initialState } from './state'
import { CardInfo } from './types'

export const cardInfoSlice = createSlice({
  name: 'cardInfo',
  initialState,
  reducers: {
    setCardInfo(state, action: PayloadAction<CardInfo>) {
      state.debitCard = action.payload
    }
  }
})

export const { setCardInfo } = cardInfoSlice.actions
