import { TicketsOrderState } from './types'

export const initialState: TicketsOrderState = {
  ticketsOrder: undefined,
  response: undefined,
  request: {
    status: 'idle',
    error: undefined
  }
}
