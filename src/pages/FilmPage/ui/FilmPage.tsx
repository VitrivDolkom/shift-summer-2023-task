import { useParams } from 'react-router-dom'

import { ChoiceFilmTickets } from '@/modules/ChoiceFilmTickets'
import { FillUserInfo } from '@/modules/FillUserInfo'
import { FilmInfo } from '@/modules/FilmInfo'
import { FilmSchedule } from '@/modules/FilmSchedule'
import { Header } from '@/modules/Header'
import { SelectedTicketsInfo } from '@/modules/SelectedTicketsInfo'
import { Modal, useModal } from '@/shared/uikit/Modal'

import s from './styles.module.css'

export const FilmPage = () => {
  const { isOpened, onModalClose, onModalOpen } = useModal()
  const params = useParams()
  const filmId = params.id

  if (!filmId) {
    return <div>Error page</div>
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
            <FillUserInfo />
          </Modal>
        </div>
      </main>
    </>
  )
}
