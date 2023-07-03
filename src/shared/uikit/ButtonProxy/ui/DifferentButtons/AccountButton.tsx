import { ButtonProps } from '../../lib/types'

import s from '../styles.module.css'

export const AccountButton = ({ onClick }: ButtonProps) => (
  <button onClick={onClick} className={s.acc}>
    Аккаунт
  </button>
)
