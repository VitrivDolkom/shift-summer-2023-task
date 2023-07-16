import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { ProfileService } from '../api/ProfileService.service'

export const fetchProfile = createAsyncThunk<
  api.SessionResponse,
  api.CreateAuthorizedRequestDto,
  { rejectValue: string }
>('/users/session', async ({ token }: api.CreateAuthorizedRequestDto, { rejectWithValue }) => {
  try {
    const response = await ProfileService.getSession({ token })
    return response.data
  } catch (error) {
    return rejectWithValue(
      (error as AxiosError<api.SessionResponse>).response?.data.reason || 'Ошибка получения данных'
    )
  }
})
