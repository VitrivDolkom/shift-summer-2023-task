import { AxiosResponse } from 'axios'

import { usersInstance } from '@/shared/api'

export const SignInService = {
  signIn: async (signInDto: api.SignInDto) =>
    await usersInstance.post<api.SignInDto, AxiosResponse<api.SignInResponse>>('/signin', signInDto)
}
