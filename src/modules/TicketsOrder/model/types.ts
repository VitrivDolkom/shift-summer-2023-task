import { RequestInfo } from '@/shared/api'

export type TicketsOrderError = api.BaseResponse

export interface TicketsOrderState {
  ticketsOrder?: api.CreateCinemaPaymentDto
  response?: api.PaymentResponse
  request: RequestInfo
}
