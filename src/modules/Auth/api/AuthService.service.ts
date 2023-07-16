import { AxiosResponse } from 'axios'

import { authInstance } from '@/shared/api'

export const AuthService = {
  otp: async (otpDto: api.CreateOtpDto) =>
    await authInstance.post<api.CreateOtpDto, AxiosResponse<api.OtpResponse>>('/otp', otpDto)
}
