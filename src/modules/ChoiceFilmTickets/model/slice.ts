import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TicketPlaceInfo } from '@/shared/uikit/SeancePlace'

import { initialState } from './state'

export const filmTicketsSlice = createSlice({
  name: 'filmTickets',
  initialState,
  reducers: {
    toggleTicket(state, action: PayloadAction<TicketPlaceInfo>) {
      const filteredTickets = state.tickets.filter(
        (ticket) => ticket.column !== action.payload.column || ticket.row !== action.payload.row
      )

      if (filteredTickets.length === state.tickets.length) state.tickets.push(action.payload)
      else state.tickets = filteredTickets
    }
  }
})

export const { toggleTicket } = filmTicketsSlice.actions
