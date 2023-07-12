import { RequestInfo } from '@/shared/api'

export interface ProfileState {
  profile: api.UserProfile
  isAuth: boolean
  request: RequestInfo
}
