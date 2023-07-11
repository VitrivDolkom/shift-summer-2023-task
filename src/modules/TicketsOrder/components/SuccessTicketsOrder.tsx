import { SuccessTicketsOrderProps } from '../lib/types'

import okey from '@/assets/img/okey.svg'
import s from '../ui/styles.module.css'

export const SuccessTicketsOrder = ({ order, filmName, date, time }: SuccessTicketsOrderProps) => (
  <div className={s.wrapper}>
    <div className={['content', s.content].join(' ')}>
      <div className={s.title}>Оплата прошла успешно!</div>
      <div className={s.img}>
        <img src={okey} alt="успешно" />
      </div>
      <div className={s.title}>Код билета</div>
      <div className={s.orderNumber}>{order.orderNumber}</div>
      <div className={s.mainInfo}>
        <div className={s.block}>
          <div className={s.preInfo}>Фильм:</div>
          <div className={s.info}>{filmName}</div>
        </div>
        <div className={s.block}>
          <div className={s.preInfo}>Дата и время:</div>
          <div className={s.info}>
            {date} {time}
          </div>
        </div>
        <div className={s.block}>
          <div className={s.preInfo}>Дата и время:</div>
          <div className={s.info}>
            {date} {time}
          </div>
        </div>
        <div className={s.block}>
          <div className={s.preInfo}>Места:</div>
          <div className={s.info}>
            {order.tickets.map((ticket) => `${ticket.row} ряд - ${ticket.column}; `)}
          </div>
        </div>
      </div>
    </div>
    <footer className={s.footer}>вся информация была продублирована в SMS</footer>
  </div>
)
