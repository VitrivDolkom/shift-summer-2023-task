import { useAppSelector } from '@/store'
import { useLocation, useNavigate } from 'react-router-dom'

import logout from '@/assets/img/logout.svg'
import { Button, Typography } from '@/shared/uikit'

import s from '../ui/styles.module.css'

export const HeaderButton = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { isAuth } = useAppSelector((state) => state.userProfile)

  if (!isAuth) {
    return (
      <div className={s.btn}>
        <Button styleType="outlined" onClick={() => navigate('/auth')}>
          <Typography tag="p" variant="btn2" text="Войти" />
        </Button>
      </div>
    )
  }

  if (location.pathname.startsWith('/profile')) {
    return (
      <div className={s.btn}>
        <Button styleType="outlined" onClick={() => navigate('/profile')}>
          <div className={s.insideBtn}>
            <img src={logout} alt="" />
            <Typography tag="p" variant="btn2" text="Выйти" />
          </div>
        </Button>
      </div>
    )
  }

  return (
    <div className={s.btn}>
      <Button styleType="outlined" onClick={() => navigate('/profile')}>
        <Typography tag="p" variant="btn2" text="Кабинет" />
      </Button>
    </div>
  )
}
