import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TicketPlaceInfo } from '@/shared/uikit/SeancePlace'

import { initialState } from './state'

export const filmTicketsSlice = createSlice({
  name: 'filmTickets',
  initialState,
  reducers: {
    toggleTicket(state, action: PayloadAction<TicketPlaceInfo>) {
      if (action.payload.type === 'BLOCKED') return

      const filteredTickets = state.tickets.filter(
        (ticket) => ticket.column !== action.payload.column || ticket.row !== action.payload.row
      )

      if (filteredTickets.length === state.tickets.length) {
        state.tickets.push(action.payload)
        state.price += action.payload.price
      } else {
        state.tickets = filteredTickets
        state.price -= action.payload.price
      }
    },
    resetTickets(state) {
      state.tickets = []
      state.price = 0
    }
  }
})

export const { toggleTicket, resetTickets } = filmTicketsSlice.actions
