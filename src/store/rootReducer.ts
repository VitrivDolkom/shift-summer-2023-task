import { combineReducers } from '@reduxjs/toolkit'

import { posterFilmsSlice } from '@/modules/PosterFilms'

export const rootReducer = combineReducers({
  posterMovies: posterFilmsSlice.reducer
})

export type RootState = ReturnType<typeof rootReducer>
