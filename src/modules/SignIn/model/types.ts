import { RequestInfo } from '@/shared/api'




export interface SignInState {
  userInfo?: api.SignInResponse
  request: RequestInfo
}