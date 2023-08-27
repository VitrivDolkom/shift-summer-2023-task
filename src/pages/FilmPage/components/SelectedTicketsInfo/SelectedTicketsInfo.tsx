import ticketImg from '@/assets/img/ticket.svg'
import { useFilmInfoQuery, useFilmSchedulesQuery } from '@/shared/api'
import { TitleWithInfo } from '@/shared/components'
import { getHallName } from '@/shared/lib'
import { Button, Typography } from '@/shared/uikit'

import s from './styles.module.css'

export interface SelectedTicketsInfoProps {
  onBuyButtonClick: () => void
  filmId: string
  schedule?: api.Schedule
  seance?: api.ScheduleSeance
  tickets: api.FullTicketInfo[]
  price: number
}

export const SelectedTicketsInfo = (props: SelectedTicketsInfoProps) => {
  const { onBuyButtonClick, filmId, schedule, seance, tickets, price } = props
  const { data: film } = useFilmInfoQuery(filmId)
  const filmScheduleQuery = useFilmSchedulesQuery(filmId)

  if (filmScheduleQuery.isLoading || !film || !schedule || !seance) {
    return null
  }

  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <div className={s.title}>{getHallName(seance.hall.name)}</div>
        <TitleWithInfo title="Фильм:" info={film.name} />
        <TitleWithInfo title="Дата и время:" info={`${schedule.date} ${seance.time}`} />
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
