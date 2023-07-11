import { createAsyncThunk } from '@reduxjs/toolkit'

import { SignInService } from '../api/ProfileService.service'

export const fetchProfile = createAsyncThunk('/users/signin', async (signInDto: api.SignInDto) => {
  const response = await SignInService.signIn(signInDto)

  return response.data
})
