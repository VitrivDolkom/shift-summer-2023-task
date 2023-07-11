import { ErrorTicketsOrderProps } from '../lib/types'

import error from '@/assets/img/error.svg'
import s from '../ui/styles.module.css'

export const ErrorTicketsOrder = ({ errorMessage }: ErrorTicketsOrderProps) => (
  <div className={s.wrapper}>
    <div className={s.title}>Ошибка заказа</div>
    <div className={s.img}>
      <img src={error} alt="ошибка" />
    </div>
    <div className={s.footer}>{errorMessage}</div>
  </div>
)
