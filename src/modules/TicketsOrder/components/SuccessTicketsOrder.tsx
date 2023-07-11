import okey from '@/assets/img/okey.svg'
import { TitleWithInfo } from '@/shared/components'

import { SuccessTicketsOrderProps } from '../lib/types'

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
        <TitleWithInfo title="Фильм:" info={filmName} />
        <TitleWithInfo title="Дата и время:" info={`${date} ${time}`} />
        <TitleWithInfo
          title="Места:"
          info={order.tickets.map((ticket) => `${ticket.row} ряд - ${ticket.column}; `).toString()}
        />
      </div>
    </div>
    <footer className={s.footer}>вся информация была продублирована в SMS</footer>
  </div>
)
