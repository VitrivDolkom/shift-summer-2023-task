import { TicketsOrderInfo, TicketsOrderInfoResponse } from '../model/types'

export interface TicketsOrderProps {
  order: TicketsOrderInfo
}

export interface SuccessTicketsOrderProps {
  order: TicketsOrderInfoResponse
  filmName: string
  date: string
  time: string
}

export interface ErrorTicketsOrderProps {
  errorMessage: string
}

export interface PendingTicketsOrderProps {
  order: TicketsOrderInfo
}