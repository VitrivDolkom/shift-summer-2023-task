import { RequestInfo } from '@/shared/api'

export interface UserOrdersState {
  orders: api.CinemaOrder[]
  request: RequestInfo
}
