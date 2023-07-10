import { AxiosResponse } from 'axios'

import { SignInDto } from '@/modules/Auth/model/types'
import { usersInstance } from '@/shared/api'

import { SignInResponse } from '../model/types'

export const SignInService = {
  signIn: async (signInDto: SignInDto) =>
    await usersInstance.post<SignInDto, AxiosResponse<SignInResponse>>('/signin', signInDto)
}
