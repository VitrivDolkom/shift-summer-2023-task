import { AxiosResponse } from 'axios'

import { myRequest } from './myRequest'

export const postSignIn = async (dto: api.SignInDto) =>
  await myRequest<api.SignInDto, AxiosResponse<api.SignInResponse>>({
    method: 'post',
    url: '/users/signin',
    data: dto
  })
