import { createAsyncThunk } from '@reduxjs/toolkit'

import { TicketsOrderService } from '../api/TicketsOrderService.service'
import { TicketsOrderInfo } from './types'

export const payTicketsOrder = createAsyncThunk('/payment', async (ticketsOrder: TicketsOrderInfo) => {
  const response = await TicketsOrderService.postTicketsOrder(ticketsOrder)
  return response
})
