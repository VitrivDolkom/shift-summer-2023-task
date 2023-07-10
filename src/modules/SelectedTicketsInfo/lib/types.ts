export interface SelectedTicketsInfoProps {
  onBuyButtonClick: () => void
}
export interface SelectedTicketsInfoComponentProps {
  tickets: api.FullTicketInfo[]
  filmName: string
  hallName: string
  date: string
  time: string
  price: number
  onBuyButtonClick: () => void
}
