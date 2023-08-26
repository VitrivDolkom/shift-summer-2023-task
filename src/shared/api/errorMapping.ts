import { AxiosError } from 'axios'

export const errorMapping = (error: unknown, errorMessage: string) =>
  (error as AxiosError<api.BaseResponse>).response?.data.reason || errorMessage
