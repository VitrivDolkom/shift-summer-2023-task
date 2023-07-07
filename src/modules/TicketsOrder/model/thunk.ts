import { createAsyncThunk } from '@reduxjs/toolkit'

import { TicketsOrderService } from '../api/TicketsOrderService.service'
import { TicketsOrder } from './types'

export const payTicketsOrder = createAsyncThunk('/payment', async (ticketsOrder: TicketsOrder) => {
  const response = await TicketsOrderService.postTicketsOrder(ticketsOrder)
  return response
})
