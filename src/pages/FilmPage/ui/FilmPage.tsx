import { useAppDispatch } from '@/store'
import { useParams } from 'react-router-dom'

import { useFilmInfoQuery } from '@/modules/FilmInfo'
import { Header } from '@/modules/Header'
import { setTicketsOrderInfo } from '@/modules/TicketsOrder'
import { useModal } from '@/shared/lib'
import { Modal, Typography } from '@/shared/uikit'

import {
  ChoiceFilmTickets,
  FillCardInfo,
  FillUserInfo,
  FilmInfo,
  FilmSchedule,
  SeancePlaceTypes,
  SelectedTicketsInfo,
  TicketsOrder
} from '../components/'
import { useFilmPageState } from './useFilmPageState'

import s from './styles.module.css'

export const FilmPage = () => {
  const params = useParams()
  const filmId = params.id || ''

  const {
    schedule,
    setSchedule,
    seance,
    setSeance,
    tickets,
    setTickets,
    price,
    personDto,
    setPersonDto
  } = useFilmPageState()

  const dispatch = useAppDispatch()
  const { data: filmInfo } = useFilmInfoQuery(filmId)

  const userInfoModal = useModal(false)
  const cardInfoModal = useModal(false)
  const orderInfoModal = useModal(false)

  if (!filmId) {
    return <Typography variant="err1" text="Ошибка загрузки фильма" />
  }

  const onBuyButtonClick = () => {
    userInfoModal.onModalOpen()
  }

  const onUserInfoSubmit = () => {
    userInfoModal.onModalClose()
    cardInfoModal.onModalOpen()
  }

  const onCardInfoSubmit = (cardInfo: api.CreatePaymentDebitCardDto) => {
    const ticketsOrderInfo: api.CreateCinemaPaymentDto = {
      debitCard: cardInfo,
      filmId: filmInfo?.id || '',
      person: personDto,
      tickets: tickets,
      seance: { date: schedule?.date || '', time: seance?.time || '' }
    }

    dispatch(setTicketsOrderInfo(ticketsOrderInfo))

    cardInfoModal.onModalClose()
    orderInfoModal.onModalOpen()
  }

  const toggleTicket = (ticketToToggle: api.FullTicketInfo) => {
    if (ticketToToggle.type === 'BLOCKED') return

    setTickets((tickets) => {
      const filteredTickets = tickets.filter(
        (ticket) => ticket.column !== ticketToToggle.column || ticket.row !== ticketToToggle.row
      )

      if (filteredTickets.length === tickets.length) return [...tickets, ticketToToggle]

      return filteredTickets
    })
  }

  return (
    <>
      <Header type="withButton" />
      <main>
        <FilmInfo id={filmId} />
        <FilmSchedule
          id={filmId}
          schedule={schedule}
          seance={seance}
          onScheduleChange={(schedule) => {
            setSchedule(schedule)
            setSeance(schedule.seances[0])
          }}
          onSeanceChange={(seance) => setSeance(seance)}
        />
        <div className={s.tickets}>
          <ChoiceFilmTickets
            filmId={filmId}
            seance={seance}
            onTicketToggle={toggleTicket}
            tickets={tickets}
            resetTickets={() => setTickets([])}
          />
          <SelectedTicketsInfo
            onBuyButtonClick={onBuyButtonClick}
            filmId={filmId}
            schedule={schedule}
            seance={seance}
            tickets={tickets}
            price={price}
          />
          <Modal isOpened={userInfoModal.isOpened} onClose={userInfoModal.onModalClose}>
            <FillUserInfo
              onSubmit={onUserInfoSubmit}
              updatePersonDto={(personDto: api.CreatePaymentPersonDto) => setPersonDto(personDto)}
            />
          </Modal>
          <Modal isOpened={cardInfoModal.isOpened} onClose={cardInfoModal.onModalClose}>
            <FillCardInfo onSubmit={onCardInfoSubmit} />
          </Modal>
          <Modal isOpened={orderInfoModal.isOpened} onClose={orderInfoModal.onModalClose}>
            <TicketsOrder filmId={filmId} />
          </Modal>
        </div>
        <SeancePlaceTypes />
      </main>
    </>
  )
}
