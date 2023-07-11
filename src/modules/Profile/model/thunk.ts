import { createAsyncThunk } from '@reduxjs/toolkit'

import { ProfileService } from '../api/ProfileService.service'

export const fetchProfile = createAsyncThunk('/users/session', async (token: string) => {
  const response = await ProfileService.getSession(token)

  return response.data
})
