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

