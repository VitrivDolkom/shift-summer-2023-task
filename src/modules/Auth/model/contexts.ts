import { createContext, useContext } from 'react'

interface IAuthContext {
  isAuth: boolean
}

interface IAuthSwitcherContext {
  authme: () => void
  disauthme: () => void
}

export const AuthSwitcherContext = createContext<IAuthSwitcherContext>({
  authme: () => ({}),
  disauthme: () => ({})
})

export const AuthContext = createContext<IAuthContext>({
  isAuth: true
})

export const useAuthContext = () => useContext(AuthContext)
export const useAuthSwitcherContext = () => useContext(AuthSwitcherContext)
