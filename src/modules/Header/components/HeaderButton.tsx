import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '@/modules/Auth'
import { Button } from '@/shared/uikit'

export const HeaderButton = () => {
  const navigate = useNavigate()
  const { isAuth } = useContext(AuthContext)

  if (isAuth) {
    return (
      <Button styleType="outlined" onClick={undefined}>
        <p>Кабинет</p>
      </Button>
    )
  }

  return (
    <Button styleType="outlined" onClick={() => navigate('/auth')}>
      <p>Войти</p>
    </Button>
  )
}
