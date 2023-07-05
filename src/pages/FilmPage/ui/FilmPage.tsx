import { useParams } from 'react-router-dom'

import { FilmInfo } from '@/modules/FilmInfo'
import { FilmSchedule } from '@/modules/FilmSchedule'
import { Header } from '@/modules/Header'
import { ChoiceFilmTickets } from '@/modules/ChoiceFilmTickets'

export const FilmPage = () => {
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
        <ChoiceFilmTickets />
      </main>
    </>
  )
}
