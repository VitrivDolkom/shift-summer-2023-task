import { useMutation } from 'react-query'

import { errorMapping } from '@/shared/api'

import { postSignIn } from '../../requests'

const signIn = async (dto: api.SignInDto) => {
  try {
    const response = await postSignIn(dto)

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
