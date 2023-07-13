import { useAppDispatch, useAppSelector } from '@/store'
import { useLocation, useNavigate } from 'react-router-dom'

import logoutImg from '@/assets/img/logout.svg'
import { logout } from '@/modules/UserProfile'
import { Button, Typography } from '@/shared/uikit'

import s from '../ui/styles.module.css'

export const HeaderButton = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { isAuth } = useAppSelector((state) => state.userProfile)

  const onLogoutClick = () => {
    dispatch(logout())
    navigate('/')
  }

  const onLoginClick = () => {
    navigate('/auth')
  }

  const onUserProfileClick = () => {
    navigate('/profile')
  }

  if (!isAuth) {
    return (
      <div className={s.btn}>
        <Button styleType="outlined" onClick={onLoginClick}>
          <Typography tag="p" variant="btn2" text="Войти" />
        </Button>
      </div>
    )
  }

  if (location.pathname.startsWith('/profile')) {
    return (
      <div className={s.btn}>
        <Button styleType="outlined" onClick={onLogoutClick}>
          <div className={s.insideBtn}>
            <img src={logoutImg} alt="" />
            <Typography tag="p" variant="btn2" text="Выйти" />
          </div>
        </Button>
      </div>
    )
  }

  return (
    <div className={s.btn}>
      <Button styleType="outlined" onClick={onUserProfileClick}>
        <Typography tag="p" variant="btn2" text="Кабинет" />
      </Button>
    </div>
  )
}
