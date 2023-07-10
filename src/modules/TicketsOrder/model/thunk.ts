import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { TicketsOrderService } from '../api/TicketsOrderService.service'
import { TicketsOrderError } from './types'

export const payTicketsOrder = createAsyncThunk<
  api.PaymentResponse,
  api.CreateCinemaPaymentDto,
  { rejectValue: string }
>('/payment', async (ticketsOrder: api.CreateCinemaPaymentDto, { rejectWithValue }) => {
  try {
    const response = await TicketsOrderService.postTicketsOrder(ticketsOrder)

    return response.data
  } catch (error) {
    return rejectWithValue(
      (error as AxiosError<TicketsOrderError>).response?.data.reason || 'Ошибка заказа билетов'
    )
  }
})
