import { createAsyncThunk } from '@reduxjs/toolkit'

import { PosterFilmsService } from '../api/PosterMoviesService.service'

export const fetchPosterMovies = createAsyncThunk('today', async () => {
  const response = await PosterFilmsService.getFilms()
  return response.data
})
