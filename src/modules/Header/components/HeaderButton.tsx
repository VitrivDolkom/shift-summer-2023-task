import { useContext } from 'react'

import { AuthContext } from '@/modules/Auth'
import { Button } from '@/shared/uikit/Button'

export const HeaderButton = () => {
  const { isAuth } = useContext(AuthContext)

  return <Button type={isAuth ? 'account' : 'login'} text={isAuth ? 'Кабинет' : 'Войти'} />
}
