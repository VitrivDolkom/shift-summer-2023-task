import { createAsyncThunk } from '@reduxjs/toolkit'

import { AuthService } from '../api/AuthService.service'

export const createOtpCode = createAsyncThunk('auth/otp', async (phone: string) => {
  const response = await AuthService.postPhoneNumber(phone)
  return response.data
})
