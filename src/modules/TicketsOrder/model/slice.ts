import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { initialState } from './state'
import { payTicketsOrder } from './thunk'
import { TicketsOrderInfo } from './types'

export const ticketsOrderSlice = createSlice({
  name: 'ticketsOrder',
  initialState,
  reducers: {
    setTicketsOrderInfo(state, action: PayloadAction<TicketsOrderInfo>) {
      state.ticketsOrder = action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase(payTicketsOrder.fulfilled, (state, action) => {
      state.response = action.payload
    })
  }
})

export const { setTicketsOrderInfo } = ticketsOrderSlice.actions
