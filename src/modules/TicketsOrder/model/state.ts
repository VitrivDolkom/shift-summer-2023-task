import { TicketsOrderState } from './types'

export const initialState: TicketsOrderState = {
  ticketsOrder: undefined,
  response: {
    success: false,
    reason: '',
    a: ''
  }
}
