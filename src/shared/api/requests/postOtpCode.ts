import { AxiosResponse } from 'axios'

import { myRequest } from './myRequest'

export const postOtpCode = async (dto: api.CreateOtpDto) =>
  await myRequest<api.CreateOtpDto, AxiosResponse<api.OtpResponse>>({
    method: 'post',
    url: '/auth/otp',
    data: dto
  })
