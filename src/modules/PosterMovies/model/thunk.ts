import { createAsyncThunk } from '@reduxjs/toolkit'

import { PosterMoviesService } from '../api/PosterMoviesService.service'

export const fetchPosterMovies = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await PosterMoviesService.getMovies()
  return response.data
})
