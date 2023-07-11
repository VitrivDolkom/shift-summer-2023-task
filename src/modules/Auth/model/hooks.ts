import { useContext } from 'react'

import { AuthContext, AuthSwitcherContext, UserContext } from './contexts'

export const useAuthContext = () => useContext(AuthContext)
export const useAuthSwitcherContext = () => useContext(AuthSwitcherContext)
export const useUserContext = () => useContext(UserContext)
