import { Header } from '@/modules/Header'
import { Typography } from '@/shared/uikit'

import { AuthForm } from '../components'

import s from './styles.module.css'

export const AuthPage = () => (
  <div>
    <Header />
    <div className={s.content}>
      <div className={s.title}>
        <Typography tag="h1" className="centered" variant="t1" text="Авторизация" />
      </div>
      <AuthForm />
    </div>
  </div>
)
