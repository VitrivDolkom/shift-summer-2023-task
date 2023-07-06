export interface SeancePlaceProps {
  place: FilmSeancePlace
  onClick: (ticket: TicketPlaceInfo) => void
  ticketPlaceInfo: TicketPlaceInfo
  isSelected: boolean
}

export interface TicketPlaceInfo {
  row: number
  column: number
}

export interface FilmSeancePlace {
  price: number
  type: SeancePlaceType
}

export type SeancePlaceType = 'ECONOM' | 'COMFORT' | 'BLOCKED'
