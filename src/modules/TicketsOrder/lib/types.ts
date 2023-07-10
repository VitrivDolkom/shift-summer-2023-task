export interface TicketsOrderProps {
  order: api.CreateCinemaPaymentDto
}

export interface SuccessTicketsOrderProps {
  order: api.CinemaOrder
  filmName: string
  date: string
  time: string
}

export interface ErrorTicketsOrderProps {
  errorMessage: string
}

export interface PendingTicketsOrderProps {
  order: api.CreateCinemaPaymentDto
}