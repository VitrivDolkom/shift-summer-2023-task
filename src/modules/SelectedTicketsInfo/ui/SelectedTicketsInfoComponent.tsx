import { Button } from '@/shared/uikit'

import { SelectedTicketsInfoComponentProps } from '../lib/types'

import s from './styles.module.css'

export const SelectedTicketsInfoComponents = (props: SelectedTicketsInfoComponentProps) => {
  const { tickets, date, filmName, hallName, time, price, onBuyButtonClick } = props

  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <div className={s.title}>{hallName}</div>
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
      </div>
      <footer className={s.footer}>
        <div className={s.title}>Сумма:</div>
        <div className={[s.info, s.price].join(' ')}>{price}руб</div>
        <Button styleType="solid" onClick={onBuyButtonClick}>
          <p>Купить</p>
        </Button>
      </footer>
    </div>
  )
}
