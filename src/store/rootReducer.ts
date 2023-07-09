import { combineReducers } from '@reduxjs/toolkit'

import { filmTicketsSlice } from '@/modules/ChoiceFilmTickets'
import { userInfoSlice } from '@/modules/FillUserInfo'
import { filmInfoSlice } from '@/modules/FilmInfo/model/slice'
import { filmScheduleSlice } from '@/modules/FilmSchedule'
import { posterFilmsSlice } from '@/modules/PosterFilms'
import { ticketsOrderSlice } from '@/modules/TicketsOrder'

export const rootReducer = combineReducers({
  posterMovies: posterFilmsSlice.reducer,
  filmInfo: filmInfoSlice.reducer,
  filmSchedule: filmScheduleSlice.reducer,
  filmTickets: filmTicketsSlice.reducer,
  ticketsOrder: ticketsOrderSlice.reducer,
  userInfo: userInfoSlice.reducer
})

export type RootState = ReturnType<typeof rootReducer>
