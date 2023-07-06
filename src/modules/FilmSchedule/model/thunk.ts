import { createAsyncThunk } from '@reduxjs/toolkit'

import { FilmScheduleService } from '../api/FilmScheduleService.service'

export const fetchFilmSchedule = createAsyncThunk('/film/schedule', async (id: string) => {
  const response = await FilmScheduleService.getFilmSchedule(id)
  return response.data
})
