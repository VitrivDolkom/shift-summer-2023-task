import { AxiosResponse } from 'axios'

import { authInstance } from '@/shared/api'

import type { CreateOtpDto, OtpResponse } from '../model/types'

export const AuthService = {
  otp: async (otpDto: CreateOtpDto) =>
    await authInstance.post<CreateOtpDto, AxiosResponse<OtpResponse>>('/otp', otpDto)
}
