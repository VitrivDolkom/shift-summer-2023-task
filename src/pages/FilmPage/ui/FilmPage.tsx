import { useAppSelector } from '@/store'
import { useNavigate, useParams } from 'react-router-dom'

import { ChoiceFilmTickets } from '@/modules/ChoiceFilmTickets'
import { FillUserInfo, UserInfo } from '@/modules/FillUserInfo'
import { FilmInfo } from '@/modules/FilmInfo'
import { FilmSchedule } from '@/modules/FilmSchedule'
import { Header } from '@/modules/Header'
import { SelectedTicketsInfo } from '@/modules/SelectedTicketsInfo'
import { Modal, useModal } from '@/shared/uikit/Modal'

import type { FilmTicketsOrder } from '../model/types'

import s from './styles.module.css'

export const FilmPage = () => {
  const { isOpened, onModalClose, onModalOpen } = useModal()
  const params = useParams()
  const navigate = useNavigate()
  const { currentSchedule, currentSeance } = useAppSelector((state) => state.filmSchedule)
  const { tickets } = useAppSelector((state) => state.filmTickets)

  const filmId = params.id

  if (!filmId) {
    return <div>Error page</div>
  }

  const onUserInfoSubmit = (userInfo: UserInfo) => {
    if (!currentSchedule || !currentSeance) return

    const orderInfo: FilmTicketsOrder = {
      filmId: filmId,
      person: userInfo,
      seance: { date: currentSchedule.date, time: currentSeance.time },
      tickets: tickets
    }

    onModalClose()
    navigate({
      pathname: '/card',
      search: `?orderInfo=${orderInfo}`
    })
  }

  return (
    <>
      <Header type="withButton" />
      <main>
        <FilmInfo id={filmId} />
        <FilmSchedule id={filmId} />
        <div className={s.tickets}>
          <ChoiceFilmTickets />
          <SelectedTicketsInfo onBuyButtonClick={onModalOpen} />
          <Modal isOpened={isOpened} onClose={onModalClose}>
            <FillUserInfo onSubmit={onUserInfoSubmit} />
          </Modal>
        </div>
      </main>
    </>
  )
}
