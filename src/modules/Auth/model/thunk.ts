import { createAsyncThunk } from '@reduxjs/toolkit'

import { AuthService } from '../api/AuthService.service'

export const createOtpCode = createAsyncThunk('auth/otp', async (otpDto: api.CreateOtpDto) => {
  const response = await AuthService.otp(otpDto)
  return response.data
})
