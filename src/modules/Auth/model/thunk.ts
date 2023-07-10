import { createAsyncThunk } from '@reduxjs/toolkit'

import { AuthService } from '../api/AuthService.service'
import { CreateOtpDto, SignInDto } from './types'

export const createOtpCode = createAsyncThunk('auth/otp', async (otpDto: CreateOtpDto) => {
  const response = await AuthService.otp(otpDto)
  return response.data
})

export const signIn = createAsyncThunk('auth/otp', async (signInDto: SignInDto) => {
  const response = await AuthService.signIn(signInDto)
  return response.data
})
