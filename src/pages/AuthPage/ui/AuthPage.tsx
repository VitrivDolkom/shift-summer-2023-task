import { AuthForm } from '@/modules/Auth'
import { Header } from '@/modules/Header'

import s from './styles.module.css'

export const AuthPage = () => (
  <div>
    <Header />
    <div className={s.content}>
      <div className={s.title}>Авторизация</div>
      <AuthForm />
    </div>
  </div>
)
