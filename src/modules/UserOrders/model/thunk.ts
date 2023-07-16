import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { UserOrdersService } from '../api/UserOrdersService.service'

export const fetchUserOrders = createAsyncThunk<
  api.CinemaOrdersResponse,
  api.CreateAuthorizedRequestDto,
  { rejectValue: string }
>('/cinema/orders', async ({ token }: api.CreateAuthorizedRequestDto, { rejectWithValue }) => {
  try {
    const response = await UserOrdersService.getUserOrders({ token })

    return response.data
  } catch (error) {
    return rejectWithValue(
      (error as AxiosError<api.BaseResponse>).response?.data.reason || 'Ошибка получения заказов'
    )
  }
})
