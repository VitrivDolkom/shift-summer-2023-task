import { AUTH_KEY } from '@/shared/const'

import { getFromLocalStorage } from '../helpers'

export const useAuth = () => {
  const isAuth = getFromLocalStorage(AUTH_KEY, false)
  return { isAuth }
}
