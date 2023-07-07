import { combineReducers } from '@reduxjs/toolkit'

import { filmTicketsSlice } from '@/modules/ChoiceFilmTickets'
import { filmInfoSlice } from '@/modules/FilmInfo/model/slice'
import { filmScheduleSlice } from '@/modules/FilmSchedule/model/slice'
import { posterFilmsSlice } from '@/modules/PosterFilms'
import { ticketsOrderSlice } from '@/modules/TicketsOrder/model/slice'

export const rootReducer = combineReducers({
  posterMovies: posterFilmsSlice.reducer,
  filmInfo: filmInfoSlice.reducer,
  filmSchedule: filmScheduleSlice.reducer,
  filmTickets: filmTicketsSlice.reducer,
  ticketsOrder: ticketsOrderSlice.reducer
})

export type RootState = ReturnType<typeof rootReducer>
