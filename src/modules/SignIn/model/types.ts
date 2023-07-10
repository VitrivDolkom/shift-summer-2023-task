import { BaseResponse, RequestInfo } from '@/shared/api'

export interface SignInResponse extends BaseResponse {
  user: User
  token: string
}

// export interface User {
//   phone: string
//   firstname: string
//   middlename: string
//   lastname: string
//   email: string
//   city: string
// }

export interface User {
  _id: string
  phone: string
}

export interface SignInState {
  userInfo?: SignInResponse
  request: RequestInfo
}