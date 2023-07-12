/* eslint-disable @typescript-eslint/no-unused-vars */
import { userProfileSlice } from '@/modules/UserProfile'
import { IS_AUTH_KEY, TOKEN_KEY } from '@/shared/const'
import { setToLocalStorage } from '@/shared/lib'

export const tokenMiddleware = (store) => (next) => (action) => {
  const result = next(action)

  if (action.type?.startsWith('userProfile/')) {
    const { token } = store.getState().userProfile.profile
    localStorage.setItem(TOKEN_KEY, token)
  }

  return result
}

export const authMiddleware = (store) => (next) => (action) => {
  if (userProfileSlice.actions.login.match(action)) {
    setToLocalStorage(IS_AUTH_KEY, true)
  } else if (userProfileSlice.actions.logout.match(action)) {
    setToLocalStorage(IS_AUTH_KEY, false)
  }

  return next(action)
}
