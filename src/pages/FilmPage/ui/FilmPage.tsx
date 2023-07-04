import { useParams } from 'react-router-dom'

import { FilmInfo } from '@/modules/FilmInfo'
import { Header } from '@/modules/Header'

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
      </main>
    </>
  )
}
