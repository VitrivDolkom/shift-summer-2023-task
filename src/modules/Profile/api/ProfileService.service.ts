import { AxiosResponse } from 'axios'

import { usersInstance } from '@/shared/api'

export const ProfileService = {
  signIn: async (signInDto: api.SignInDto) =>
    await usersInstance.post<api.SignInDto, AxiosResponse<api.SignInResponse>>('/signin', signInDto),
  getSession: async (token: string) =>
    await usersInstance.get<api.SessionResponse>('/session', {
      headers: { Authorization: `Bearer ${token}` }
    })
}
