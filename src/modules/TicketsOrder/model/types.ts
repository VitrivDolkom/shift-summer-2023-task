import { CardInfo } from '@/modules/FillCardInfo'
import { UserInfo } from '@/modules/FillUserInfo'
import { BaseResponse } from '@/shared/api'
import { TicketPlaceCoordinates } from '@/shared/uikit/SeancePlace'

export interface OrderTicketsSeanceInfo {
  date: string
  time: string
}

export interface TicketsOrder {
  filmId?: string
  person?: UserInfo
  debitCard?: CardInfo
  seance?: OrderTicketsSeanceInfo
  tickets?: TicketPlaceCoordinates
}

export interface TicketsOrderResponse extends BaseResponse {
  a: string
}

export interface TicketsOrderState {
  ticketsOrder?: TicketsOrder
  response: TicketsOrderResponse
}
