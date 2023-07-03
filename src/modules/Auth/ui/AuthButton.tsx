import { ButtonProxy } from '@/shared/uikit/ButtonProxy'
import { useContext } from 'react'

import { AuthContext } from '../model/AuthContext'

export const AuthButton = () => {
  const { isAuth } = useContext(AuthContext)

  return <ButtonProxy type={isAuth ? 'account' : 'login'} />
}
