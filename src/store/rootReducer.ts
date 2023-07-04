import { combineReducers } from '@reduxjs/toolkit'

import { filmInfoSlice } from '@/modules/FilmInfo/model/slice'
import { posterFilmsSlice } from '@/modules/PosterFilms'

export const rootReducer = combineReducers({
  posterMovies: posterFilmsSlice.reducer,
  filmInfo: filmInfoSlice.reducer
})

export type RootState = ReturnType<typeof rootReducer>
