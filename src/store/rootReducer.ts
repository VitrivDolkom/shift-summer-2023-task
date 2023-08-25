import { combineReducers } from '@reduxjs/toolkit'

import { authInfoSlice } from '@/modules/Auth'
import { ticketsOrderSlice } from '@/modules/TicketsOrder'
import { userOrdersSlice } from '@/modules/UserOrders'
import { userProfileSlice } from '@/modules/UserProfile'

export const rootReducer = combineReducers({
  ticketsOrder: ticketsOrderSlice.reducer,
  authInfo: authInfoSlice.reducer,
  userProfile: userProfileSlice.reducer,
  userOrders: userOrdersSlice.reducer
})

export type RootState = ReturnType<typeof rootReducer>
