import { BaseResponse, RequestInfo } from '@/shared/api'

export interface CreateOtpDto {
  phone: string
}

export interface SignInDto {
  phone: string
  code: number
}

export interface OtpResponse extends BaseResponse {
  retryDelay: number
}

export interface AuthInfoState {
  authInfo: SignInDto
  codeInfo?: OtpResponse
  request: RequestInfo
}

export interface User {
  phone: string
  firstname: string
  middlename: string
  lastname: string
  email: string
  city: string
}

export interface SignInResponse extends BaseResponse {
  success: boolean
  reason: string
  user: User
  token: string
}
