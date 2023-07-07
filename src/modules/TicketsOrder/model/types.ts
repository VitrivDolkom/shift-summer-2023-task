import { CardInfo } from '@/modules/FillCardInfo'
import { UserInfo } from '@/modules/FillUserInfo'
import { BaseResponse } from '@/shared/api'
import { TicketPlaceCoordinates } from '@/shared/uikit/SeancePlace'

export interface OrderTicketsSeanceInfo {
  date: string
  time: string
}

export interface TicketsOrderInfo {
  filmId?: string
  person?: UserInfo
  debitCard?: CardInfo
  seance?: OrderTicketsSeanceInfo
  tickets?: TicketPlaceCoordinates[]
}

export interface TicketsOrderResponse extends BaseResponse {
  order: {
    orderNumber: number,
    tickets: [
      {
        filmId: string,
        row: number,
        column: number,
        seance: OrderTicketsSeanceInfo
        phone: string
      }
    ],
    phone: string,
    status: string
  }
}

export interface TicketsOrderState {
  ticketsOrder?: TicketsOrderInfo
  response: TicketsOrderResponse
}
