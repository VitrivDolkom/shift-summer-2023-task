import { useNavigate } from 'react-router-dom'

import { useAuthContext } from '@/modules/Auth'
import { Button } from '@/shared/uikit'

export const HeaderButton = () => {
  const navigate = useNavigate()
  const { isAuth } = useAuthContext()

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
