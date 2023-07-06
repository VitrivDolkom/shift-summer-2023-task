import { TicketPlaceInfo } from '@/shared/uikit/SeancePlace'

export interface SelectedTicketsInfoComponentProps {
  tickets: TicketPlaceInfo[]
  filmName: string
  hallName: string
  date: string
  time: string
  price: number
}
