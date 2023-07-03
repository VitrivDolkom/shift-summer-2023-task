import { ButtonProps } from '../../lib/types'

import s from '../styles.module.css'

export const LoginButton = ({ onClick }: ButtonProps) => (
  <button onClick={onClick} className={s.login}>
    Войти
  </button>
)
