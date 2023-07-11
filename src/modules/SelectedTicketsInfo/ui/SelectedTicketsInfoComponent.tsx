import ticketImg from '@/assets/img/ticket.svg'
import { TitleWithInfo } from '@/shared/components'
import { Button, Typography } from '@/shared/uikit'

import { SelectedTicketsInfoComponentProps } from '../lib/types'

import s from './styles.module.css'

export const SelectedTicketsInfoComponents = (props: SelectedTicketsInfoComponentProps) => {
  const { tickets, date, filmName, hallName, time, price, onBuyButtonClick } = props

  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <div className={s.title}>{hallName}</div>
        <TitleWithInfo title="Фильм:" info={filmName} />
        <TitleWithInfo title="Дата и время:" info={`${date} ${time}`} />
        <TitleWithInfo
          title="Места:"
          info={tickets.map((ticket) => `${ticket.row} ряд - ${ticket.column}; `).toString()}
        />
      </div>
      <footer className={s.footer}>
        <div className={s.title}>Сумма:</div>
        <div className={s.price}>{price}руб</div>
        <div className={s.btn}>
          <Button styleType="solid" onClick={onBuyButtonClick}>
            <div className={s.insideBtn}>
              <Typography tag="p" text="Купить" variant="btn1" />
              <img src={ticketImg} alt="" />
            </div>
          </Button>
        </div>
      </footer>
    </div>
  )
}
