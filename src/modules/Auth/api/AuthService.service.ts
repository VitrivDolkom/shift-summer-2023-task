import { AxiosResponse } from 'axios'

import { authInstance, usersInstance } from '@/shared/api'

import type { CreateOtpDto, OtpResponse, SignInDto, SignInResponse } from '../model/types'

export const AuthService = {
  otp: async (otpDto: CreateOtpDto) =>
    await authInstance.post<CreateOtpDto, AxiosResponse<OtpResponse>>('/otp', otpDto),
  signIn: async (signInDto: SignInDto) =>
    await usersInstance.post<SignInDto, AxiosResponse<SignInResponse>>('/signin', signInDto)
}
