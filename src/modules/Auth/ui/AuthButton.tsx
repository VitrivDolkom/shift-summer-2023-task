import { useContext } from 'react'

import { Button } from '@/shared/uikit/Button'

import { AuthContext } from '../model/AuthContext'

export const AuthButton = () => {
  const { isAuth } = useContext(AuthContext)

  return <Button type={isAuth ? 'account' : 'login'} />
}
