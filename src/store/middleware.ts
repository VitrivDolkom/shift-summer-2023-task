/* eslint-disable @typescript-eslint/no-unused-vars */
import { profileSlice } from '@/modules/Profile'
import { IS_AUTH_KEY, TOKEN_KEY } from '@/shared/const'
import { setToLocalStorage } from '@/shared/lib'
import { AnyAction } from '@reduxjs/toolkit'

export const tokenMiddleware = (store) => (next) => (action: AnyAction) => {
  const result = next(action)

  if (action.type?.startsWith('userProfile/')) {
    debugger
    const { token } = store.getState().userProfile.profile
    localStorage.setItem(TOKEN_KEY, token)
  }

  return result
}

export const authMiddleware = (store) => (next) => (action) => {
  if (profileSlice.actions.login.match(action)) {
    setToLocalStorage(IS_AUTH_KEY, true)
  } else if (profileSlice.actions.logout.match(action)) {
    setToLocalStorage(IS_AUTH_KEY, false)
  }

  return next(action)
}
