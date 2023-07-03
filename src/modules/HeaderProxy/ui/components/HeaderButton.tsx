import { useContext } from 'react'

import { AuthContext } from '@/modules/Auth'
import { ButtonProxy } from '@/shared/uikit/ButtonProxy'

export const HeaderButton = () => {
  const { isAuth } = useContext(AuthContext)

  return <ButtonProxy type={isAuth ? 'account' : 'login'} />
}
