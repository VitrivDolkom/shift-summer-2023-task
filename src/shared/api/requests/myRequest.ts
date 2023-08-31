import { AxiosRequestConfig, AxiosResponse } from 'axios'

import { instance } from '../instance'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const myRequest = <T = any, R = AxiosResponse<T>, D = any>(config: AxiosRequestConfig<D>) =>
  instance<T, R, D>(config)
