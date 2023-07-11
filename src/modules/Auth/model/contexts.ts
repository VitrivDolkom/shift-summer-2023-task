import { createContext } from 'react'

interface IUserContext {
  user: api.User
  changeUserInfo: (userInfo: api.User) => void
}

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

export const UserContext = createContext<IUserContext>({
  user: { phone: '' },
  changeUserInfo: () => ({})
})
