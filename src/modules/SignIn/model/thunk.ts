import { createAsyncThunk } from '@reduxjs/toolkit'

import { SignInDto } from '@/modules/Auth/model/types'

import { SignInService } from '../api/SignInService.service'

export const fetchSignIn = createAsyncThunk('/users/signin', async (signInDto: SignInDto) => {
  const response = await SignInService.signIn(signInDto)

  return response.data
})
