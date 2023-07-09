import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { TicketsOrderService } from '../api/TicketsOrderService.service'
import { TicketsOrderError, TicketsOrderInfo, TicketsOrderResponse } from './types'

export const payTicketsOrder = createAsyncThunk<
  TicketsOrderResponse,
  TicketsOrderInfo,
  { rejectValue: string }
>('/payment', async (ticketsOrder: TicketsOrderInfo, { rejectWithValue }) => {
  try {
    const response = await TicketsOrderService.postTicketsOrder(ticketsOrder)

    return response.data
  } catch (error) {
    return rejectWithValue(
      (error as AxiosError<TicketsOrderError>).response?.data.reason || 'Ошибка заказа билетов'
    )
  }
})
