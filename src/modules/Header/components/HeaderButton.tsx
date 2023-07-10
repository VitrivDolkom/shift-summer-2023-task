import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '@/modules/Auth'
import { Button } from '@/shared/uikit/Button'

export const HeaderButton = () => {
  const navigate = useNavigate()
  const { isAuth } = useContext(AuthContext)

  if (isAuth) {
    return <Button type="account" text="Кабинет" onClick={undefined} />
  }

  return <Button type="login" text="Войти" onClick={() => navigate('/auth')} />
}
