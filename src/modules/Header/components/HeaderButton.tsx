import { useAppSelector } from '@/store'
import { useNavigate } from 'react-router-dom'

import { Button, Typography } from '@/shared/uikit'

import s from '../ui/styles.module.css'

export const HeaderButton = () => {
  const navigate = useNavigate()
  const { isAuth } = useAppSelector((state) => state.userProfile)

  if (isAuth) {
    return (
      <div className={s.btn}>
        <Button styleType="outlined" onClick={() => navigate('/profile')}>
          <Typography tag="p" variant="btn2" text="Кабинет" />
        </Button>
      </div>
    )
  }

  return (
    <div className={s.btn}>
      <Button styleType="outlined" onClick={() => navigate('/auth')}>
        <Typography tag="p" variant="btn2" text="Войти" />
      </Button>
    </div>
  )
}
