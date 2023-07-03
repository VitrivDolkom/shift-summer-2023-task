import { ReactNode, useCallback, useState } from 'react'

import { AuthContext } from './AuthContext'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState(false)

  const authme = useCallback(() => {
    setIsAuth(true)
  }, [])

  const disauthme = useCallback(() => {
    setIsAuth(false)
  }, [])

  return <AuthContext.Provider value={{ isAuth, authme, disauthme }}>{children}</AuthContext.Provider>
}
