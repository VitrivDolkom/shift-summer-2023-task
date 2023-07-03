import { ButtonProps } from '../../lib/types'

import s from '../styles.module.css'

export const BuyButton = ({ onClick }: ButtonProps) => (
  <button onClick={onClick} className={s.buy}>
    Купить
  </button>
)
