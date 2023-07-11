import { ReactNode, useCallback, useState } from 'react'

import { AuthContext, AuthSwitcherContext } from './contexts'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState(false)

  const authme = useCallback(() => {
    setIsAuth(true)
  }, [])

  const disauthme = useCallback(() => {
    setIsAuth(false)
  }, [])

  return (
    <AuthContext.Provider value={{ isAuth }}>
      <AuthSwitcherContext.Provider value={{ authme, disauthme }}>
        {children}
      </AuthSwitcherContext.Provider>
    </AuthContext.Provider>
  )
}
