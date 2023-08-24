import { useAppSelector } from '@/store'

import ticketImg from '@/assets/img/ticket.svg'
import { useFilmInfoQuery } from '@/modules/FilmInfo'
import { TitleWithInfo } from '@/shared/components'
import { getHallName } from '@/shared/lib'
import { Button, Typography } from '@/shared/uikit'

import s from './styles.module.css'

export interface SelectedTicketsInfoProps {
  onBuyButtonClick: () => void
  filmId: string
}

export const SelectedTicketsInfo = ({ onBuyButtonClick, filmId }: SelectedTicketsInfoProps) => {
  const { data: film } = useFilmInfoQuery(filmId)
  const { tickets, price } = useAppSelector((state) => state.filmTickets)
  const { currentSchedule, currentSeance, request } = useAppSelector((state) => state.filmSchedule)

  if (request.status === 'pending' || !film || !currentSchedule || !currentSeance) {
    return null
  }

  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <div className={s.title}>{getHallName(currentSeance.hall.name)}</div>
        <TitleWithInfo title="Фильм:" info={film.name} />
        <TitleWithInfo title="Дата и время:" info={`${currentSchedule.date} ${currentSeance.time}`} />
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
