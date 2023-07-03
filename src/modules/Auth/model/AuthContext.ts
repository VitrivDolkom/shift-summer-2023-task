import { createContext } from 'react'

interface IAuthContext {
  isAuth: boolean
  authme: () => void
  disauthme: () => void
}

export const AuthContext = createContext<IAuthContext>({
  isAuth: false,
  authme: () => ({}),
  disauthme: () => ({})
})
