import { AxiosResponse } from 'axios'
import { useMutation } from 'react-query'

import { errorMapping, usersInstance } from '@/shared/api'

const signIn = async (signInDto: api.SignInDto) => {
  try {
    const response = await usersInstance.post<api.SignInDto, AxiosResponse<api.SignInResponse>>(
      '/signin',
      signInDto
    )

    return response.data
  } catch (error: unknown) {
    throw new Error(errorMapping(error, 'Ошибка входа'))
  }
}

export const useSignIn = () => {
  const { mutate: singIn, ...other } = useMutation({
    mutationFn: (dto: api.SignInDto) => signIn(dto)
  })

  return { singIn, ...other }
}
