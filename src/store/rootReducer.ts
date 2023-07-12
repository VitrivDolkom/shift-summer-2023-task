import { combineReducers } from '@reduxjs/toolkit'

import { authInfoSlice } from '@/modules/Auth'
import { filmTicketsSlice } from '@/modules/ChoiceFilmTickets'
import { userInfoSlice } from '@/modules/FillUserInfo'
import { filmInfoSlice } from '@/modules/FilmInfo'
import { filmScheduleSlice } from '@/modules/FilmSchedule'
import { posterFilmsSlice } from '@/modules/PosterFilms'
import { ticketsOrderSlice } from '@/modules/TicketsOrder'
import { userOrdersSlice } from '@/modules/UserOrders'
import { userProfileSlice } from '@/modules/UserProfile'

export const rootReducer = combineReducers({
  posterFilms: posterFilmsSlice.reducer,
  filmInfo: filmInfoSlice.reducer,
  filmSchedule: filmScheduleSlice.reducer,
  filmTickets: filmTicketsSlice.reducer,
  ticketsOrder: ticketsOrderSlice.reducer,
  userInfo: userInfoSlice.reducer,
  authInfo: authInfoSlice.reducer,
  userProfile: userProfileSlice.reducer,
  userOrders: userOrdersSlice.reducer
})

export type RootState = ReturnType<typeof rootReducer>
