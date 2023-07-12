import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { initialState } from './state'
import { fetchUserOrders } from './thunk'

export const userOrdersSlice = createSlice({
  name: 'userOrders',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUserOrders.fulfilled, (state, action) => {
      state.request.status = 'success'
      state.orders = action.payload.orders
    })
    builder.addCase(fetchUserOrders.pending, (state) => {
      state.request.status = 'pending'
    })
    builder.addMatcher(isError, (state, action: PayloadAction<string>) => {
      state.request.status = 'error'
      state.request.error = action.payload
    })
  }
})

export const isError = (action: AnyAction) => action.type.endsWith('rejected')
