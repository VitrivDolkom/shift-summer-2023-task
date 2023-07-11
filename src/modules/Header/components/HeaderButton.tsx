import { useAppSelector } from '@/store'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/shared/uikit'

export const HeaderButton = () => {
  const navigate = useNavigate()
  const { isAuth } = useAppSelector((state) => state.userProfile)
  
  if (isAuth) {
    return (
      <Button styleType="outlined" onClick={() => navigate('/profile')}>
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
