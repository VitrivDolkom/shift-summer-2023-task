import { IS_AUTH_KEY, TOKEN_KEY } from '@/shared/const'
import { getFromLocalStorage } from '@/shared/lib'

import { ProfileState } from './types'

export const initialState: ProfileState = {
  profile: {
    user: {
      phone: ''
    },
    token: getFromLocalStorage(TOKEN_KEY, '')
  },
  isAuth: getFromLocalStorage(IS_AUTH_KEY, false),
  request: {
    status: 'idle'
  }
}
