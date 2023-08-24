import { combineReducers } from '@reduxjs/toolkit'

import { authInfoSlice } from '@/modules/Auth'
import { filmTicketsSlice } from '@/modules/ChoiceFilmTickets'
import { userInfoSlice } from '@/modules/FillUserInfo'
import { ticketsOrderSlice } from '@/modules/TicketsOrder'
import { userOrdersSlice } from '@/modules/UserOrders'
import { userProfileSlice } from '@/modules/UserProfile'

export const rootReducer = combineReducers({
  filmTickets: filmTicketsSlice.reducer,
  ticketsOrder: ticketsOrderSlice.reducer,
  userInfo: userInfoSlice.reducer,
  authInfo: authInfoSlice.reducer,
  userProfile: userProfileSlice.reducer,
  userOrders: userOrdersSlice.reducer
})

export type RootState = ReturnType<typeof rootReducer>
