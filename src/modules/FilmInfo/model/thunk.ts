import { createAsyncThunk } from '@reduxjs/toolkit'

import { FilmInfoService } from '../api/FilmInfoService.service'

export const fetchFilmInfo = createAsyncThunk('film/id', async (id: string) => {
  const response = await FilmInfoService.getFilmInfo(id)
  return response.data
})
