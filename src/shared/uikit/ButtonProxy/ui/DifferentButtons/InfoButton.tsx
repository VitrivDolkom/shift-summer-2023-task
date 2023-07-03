import { ButtonProps } from '../../lib/types'

import s from '../styles.module.css'

export const InfoButton = ({ onClick }: ButtonProps) => (
  <button onClick={onClick} className={s.info}>
    Подробнее
  </button>
)
