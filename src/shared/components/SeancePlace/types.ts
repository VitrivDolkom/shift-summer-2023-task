export interface SeancePlaceProps {
  place: api.FilmSeancePlace
  onClick: (ticket: api.FullTicketInfo) => void
  ticketPlaceInfo: api.FullTicketInfo
  isSelected: boolean
}
