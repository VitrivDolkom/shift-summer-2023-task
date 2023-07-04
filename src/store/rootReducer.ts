import { combineReducers } from '@reduxjs/toolkit'

import { posterMoviesSlice } from '@/modules/PosterMovies'

export const rootReducer = combineReducers({
  posterMovies: posterMoviesSlice.reducer
})

export type RootState = ReturnType<typeof rootReducer>
