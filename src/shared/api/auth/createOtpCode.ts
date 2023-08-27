import { AxiosError, AxiosResponse } from 'axios'
import { useMutation } from 'react-query'

import { authInstance } from '@/shared/api'

const createOtpCode = async (dto: api.CreateOtpDto) => {
  try {
    const response = await authInstance.post<api.CreateOtpDto, AxiosResponse<api.OtpResponse>>(
      '/otp',
      dto
    )

    return response.data
  } catch (error: unknown) {
    throw new Error(
      (error as AxiosError<api.BaseResponse>).response?.data.reason || 'Ошибка создания отп кода'
    )
  }
}

export const useCreateOtpCode = () =>
  useMutation({
    mutationFn: (dto: api.CreateOtpDto) => createOtpCode(dto)
  })
