import { SelectedTicketsInfoComponentProps } from '../lib/types'

import s from './styles.module.css'

export const SelectedTicketsInfoComponents = (props: SelectedTicketsInfoComponentProps) => {
  const { tickets, date, filmName, hallName, time, price } = props

  return (
    <div className={s.wrapper}>
      <div className={s.hallName}>{hallName}</div>
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
        <div className={s.preInfo}>Места:</div>
        <div className={s.info}>
          {tickets.map((ticket) => `${ticket.row} ряд - ${ticket.column}; `)}
        </div>
      </div>
      <div>{price} рублей</div>
    </div>
  )
}
