import { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'

import { AuthContext } from '@/modules/Auth'
import { ChoiceFilmTickets } from '@/modules/ChoiceFilmTickets'
import { FillCardInfo } from '@/modules/FillCardInfo'
import { FillUserInfo, UserInfo } from '@/modules/FillUserInfo'
import { FilmInfo } from '@/modules/FilmInfo'
import { FilmSchedule } from '@/modules/FilmSchedule'
import { Header } from '@/modules/Header'
import { SelectedTicketsInfo } from '@/modules/SelectedTicketsInfo'
import { Modal, useModal } from '@/shared/uikit/Modal'

import s from './styles.module.css'

export const FilmPage = () => {
  const userInfoModal = useModal(false)
  const cardInfoModal = useModal(false)
  const orderInfoModal = useModal(false)
  const params = useParams()
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)
  const { isAuth } = useContext(AuthContext)

  const filmId = params.id

  if (!filmId) {
    return <div>Error page</div>
  }

  const onBuyButtonClick = () => {
    if (!isAuth) userInfoModal.onModalOpen()
    else cardInfoModal.onModalOpen()
  }

  const onUserInfoSubmit = () => {
    userInfoModal.onModalClose()
    cardInfoModal.onModalOpen()
  }

  const onCardInfoSubmit = () => {
    cardInfoModal.onModalClose()
  }

  return (
    <>
      <Header type="withButton" />
      <main>
        <FilmInfo id={filmId} />
        <FilmSchedule id={filmId} />
        <div className={s.tickets}>
          <ChoiceFilmTickets />
          <SelectedTicketsInfo onBuyButtonClick={onBuyButtonClick} />
          <Modal isOpened={userInfoModal.isOpened} onClose={userInfoModal.onModalClose}>
            <FillUserInfo onSubmit={onUserInfoSubmit} />
          </Modal>
          <Modal isOpened={cardInfoModal.isOpened} onClose={cardInfoModal.onModalClose}>
            <FillCardInfo onSubmit={onCardInfoSubmit} />
          </Modal>
          <Modal isOpened={orderInfoModal.isOpened} onClose={orderInfoModal.onModalClose}>
            <div></div>
          </Modal>
        </div>
      </main>
    </>
  )
}
