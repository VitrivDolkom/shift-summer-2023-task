import error from '@/assets/img/error.svg'

import s from './styles.module.css'

interface ErrorTicketsOrderProps {
  errorMessage: string
}

export const ErrorTicketsOrder = ({ errorMessage }: ErrorTicketsOrderProps) => (
  <div className={s.wrapper}>
    <div className={s.title}>Ошибка заказа</div>
    <div className={s.img}>
      <img src={error} alt="ошибка" />
    </div>
    <div className={s.footer}>{errorMessage}</div>
  </div>
)
