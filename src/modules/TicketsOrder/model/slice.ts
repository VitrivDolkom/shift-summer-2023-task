import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { initialState } from './state'
import { payTicketsOrder } from './thunk'
import { TicketsOrder } from './types'

export const ticketsOrderSlice = createSlice({
  name: 'ticketsOrder',
  initialState,
  reducers: {
    setTicketsOrderInfo(state, action: PayloadAction<TicketsOrder>) {
      state.ticketsOrder = action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase(payTicketsOrder.fulfilled, (state, action) => {
      state.response = action.payload
    })
  }
})
