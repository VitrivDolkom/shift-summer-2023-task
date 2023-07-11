import { ReactNode, useCallback, useState } from 'react'

import { AuthContext, AuthSwitcherContext, UserContext } from './contexts'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState<api.User>({ phone: '' })

  const authme = useCallback(() => {
    setIsAuth(true)
  }, [])

  const disauthme = useCallback(() => {
    setIsAuth(false)
  }, [])

  const changeUserInfo = useCallback((changes: api.User) => {
    setUser((user) => ({ user, ...changes }))
  }, [])

  return (
    <AuthContext.Provider value={{ isAuth }}>
      <AuthSwitcherContext.Provider value={{ authme, disauthme }}>
        <UserContext.Provider value={{ user, changeUserInfo }}>{children}</UserContext.Provider>
      </AuthSwitcherContext.Provider>
    </AuthContext.Provider>
  )
}
