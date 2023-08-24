import { useAppDispatch, useAppSelector } from '@/store'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

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

import s from './styles.module.css'

export const FilmPage = () => {
  const params = useParams()

  const [schedule, setSchedule] = useState<api.Schedule>()
  const [seance, setSeance] = useState<api.ScheduleSeance>()

  const dispatch = useAppDispatch()
  const { tickets } = useAppSelector((state) => state.filmTickets)
  const { person } = useAppSelector((state) => state.userInfo)
  const { film } = useAppSelector((state) => state.filmInfo)

  const userInfoModal = useModal(false)
  const cardInfoModal = useModal(false)
  const orderInfoModal = useModal(false)

  const filmId = params.id

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
      filmId: film?.id || '',
      person: person,
      tickets: tickets,
      seance: { date: schedule?.date || '', time: seance?.time || '' }
    }

    dispatch(setTicketsOrderInfo(ticketsOrderInfo))

    cardInfoModal.onModalClose()
    orderInfoModal.onModalOpen()
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
          onScheduleChange={(schedule) => setSchedule(schedule)}
          onSeanceChange={(seance) => setSeance(seance)}
        />
        <div className={s.tickets}>
          {/* <ChoiceFilmTickets /> */}
          {/* <SelectedTicketsInfo onBuyButtonClick={onBuyButtonClick} /> */}
          <Modal isOpened={userInfoModal.isOpened} onClose={userInfoModal.onModalClose}>
            <FillUserInfo onSubmit={onUserInfoSubmit} />
          </Modal>
          <Modal isOpened={cardInfoModal.isOpened} onClose={cardInfoModal.onModalClose}>
            <FillCardInfo onSubmit={onCardInfoSubmit} />
          </Modal>
          <Modal isOpened={orderInfoModal.isOpened} onClose={orderInfoModal.onModalClose}>
            <TicketsOrder />
          </Modal>
        </div>
        <SeancePlaceTypes />
      </main>
    </>
  )
}
