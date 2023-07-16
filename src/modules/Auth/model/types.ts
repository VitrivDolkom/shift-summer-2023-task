import { RequestInfo } from '@/shared/api'

export interface AuthInfoState {
  signInDto: api.SignInDto
  otpResponse?: api.OtpResponse
  request: RequestInfo
}

