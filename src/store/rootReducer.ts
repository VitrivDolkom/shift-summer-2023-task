import { combineReducers } from '@reduxjs/toolkit'

import { userProfileSlice } from '@/modules/UserProfile'

export const rootReducer = combineReducers({
  userProfile: userProfileSlice.reducer
})

export type RootState = ReturnType<typeof rootReducer>
