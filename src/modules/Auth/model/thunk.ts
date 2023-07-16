import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { AuthService } from '../api/AuthService.service'

export const createOtpCode = createAsyncThunk<
  api.OtpResponse,
  api.CreateOtpDto,
  { rejectValue: string }
>('auth/otp', async (otpDto: api.CreateOtpDto, { rejectWithValue }) => {
  try {
    const response = await AuthService.otp(otpDto)
    return response.data
  } catch (error) {
    return rejectWithValue(
      (error as AxiosError<api.OtpResponse>).response?.data.reason || 'Ошибка создания кода'
    )
  }
})
