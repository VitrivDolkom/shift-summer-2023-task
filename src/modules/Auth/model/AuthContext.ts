import { createContext } from 'react'

interface IAuthContext {
  isAuth: boolean
  authme: () => void
  disauthme: () => void
}

export const AuthContext = createContext<IAuthContext>({
  isAuth: true,
  authme: () => ({}),
  disauthme: () => ({})
})
