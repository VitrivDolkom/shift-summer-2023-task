export interface SeancePlaceProps {
  place: FilmSeancePlace
  onClick: (ticket: TicketPlaceInfo) => void
  ticketPlaceInfo: TicketPlaceInfo
  isSelected: boolean
}

export interface TicketPlaceCoordinates {
  row: number
  column: number
}

export interface TicketPlaceInfo extends FilmSeancePlace {
  row: number
  column: number
}

export interface FilmSeancePlace {
  price: number
  type: SeancePlaceType
}

export type SeancePlaceType = 'ECONOM' | 'COMFORT' | 'BLOCKED'
