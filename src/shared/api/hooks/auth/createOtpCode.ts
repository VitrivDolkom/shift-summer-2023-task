import { useMutation } from 'react-query'

import { errorMapping } from '../../errorMapping'
import { postOtpCode } from '../../requests'

const createOtpCode = async (dto: api.CreateOtpDto) => {
  try {
    const response = await postOtpCode(dto)

    return response.data
  } catch (error: unknown) {
    throw new Error(errorMapping(error, 'Ошибка создания отп кода'))
  }
}

export const useCreateOtpCode = () =>
  useMutation({
    mutationFn: (dto: api.CreateOtpDto) => createOtpCode(dto)
  })
