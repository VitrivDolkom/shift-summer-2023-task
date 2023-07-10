import { createAsyncThunk } from '@reduxjs/toolkit'

import { SignInService } from '../api/SignInService.service'

export const fetchSignIn = createAsyncThunk('/users/signin', async (signInDto: api.SignInDto) => {
  const response = await SignInService.signIn(signInDto)

  return response.data
})
