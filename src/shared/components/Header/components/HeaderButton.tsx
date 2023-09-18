import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'

import logoutImg from '@/assets/img/logout.svg'
import { routes } from '@/shared/const'
import { useProfile } from '@/shared/store'
import { Button, Typography } from '@/shared/uikit'

import s from '../ui/styles.module.css'

export const HeaderButton = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { logout, isAuth } = useProfile()
  const { t } = useTranslation()

  const onLogoutClick = () => {
    logout()
    navigate(routes.root)
  }

  const onLoginClick = () => {
    navigate(routes.auth)
  }

  const onUserProfileClick = () => {
    navigate(routes.profile)
  }

  if (!isAuth) {
    return (
      <div className={s.btn}>
        <Button styleType="outlined" onClick={onLoginClick}>
          <Typography tag="p" variant="btn2" text={t('global.login')} />
        </Button>
      </div>
    )
  }

  if (location.pathname.startsWith(routes.profile)) {
    return (
      <div className={s.btn}>
        <Button styleType="outlined" onClick={onLogoutClick}>
          <div className={s.insideBtn}>
            <img src={logoutImg} alt="" />
            <Typography tag="p" variant="btn2" text={t('global.logout')} />
          </div>
        </Button>
      </div>
    )
  }

  return (
    <div className={s.btn}>
      <Button styleType="outlined" onClick={onUserProfileClick}>
        <Typography tag="p" variant="btn2" text={t('global.profile')} />
      </Button>
    </div>
  )
}
