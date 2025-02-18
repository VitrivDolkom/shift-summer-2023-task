import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { initialState } from './state'
import { payTicketsOrder } from './thunk'

export const ticketsOrderSlice = createSlice({
  name: 'ticketsOrder',
  initialState,
  reducers: {
    setTicketsOrderInfo(state, action: PayloadAction<api.CreateCinemaPaymentDto>) {
      state.ticketsOrder = action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase(payTicketsOrder.fulfilled, (state, action) => {
      state.request.status = 'success'
      state.response = action.payload
    })
    builder.addCase(payTicketsOrder.pending, (state) => {
      state.request.status = 'pending'
    })
    builder.addMatcher(isError, (state, action: PayloadAction<string>) => {
      state.request.status = 'error'
      state.request.error = action.payload
    })
  }
})

export const isError = (action: AnyAction) => action.type.endsWith('rejected')

export const { setTicketsOrderInfo } = ticketsOrderSlice.actions
