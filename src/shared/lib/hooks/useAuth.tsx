import { IS_AUTH_KEY } from '@/shared/const'

import { getFromLocalStorage } from '../helpers'

export const useAuth = () => {
  const isAuth = getFromLocalStorage(IS_AUTH_KEY, false)
  return { isAuth }
}
