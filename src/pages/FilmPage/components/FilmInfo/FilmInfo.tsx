import { useTranslation } from 'react-i18next'

import { useFilmInfoQuery } from '@/shared/api'
import { FilmRating } from '@/shared/components'
import { Typography } from '@/shared/uikit'

import { FilmDirectors } from './FilmDirectors'
import { FIlmGenreCountryYear } from './FIlmGenreCountryYear'
import { FilmInfoSkeleton } from './FilmInfoSkeleton'
import { WatchDate } from './WatchDate'

import s from './styles.module.css'

interface FilmInfoProps {
  id: string
}

export const FilmInfo = ({ id }: FilmInfoProps) => {
  const { t } = useTranslation()
  const { data: film, isSuccess, isLoading, isError } = useFilmInfoQuery(id)

  if (isLoading) {
    return <FilmInfoSkeleton />
  }

  if (isError || !film) {
    return <Typography tag="h1" variant="err2" text={t('film.fetch_error')} />
  }

  if (isSuccess) {
    return (
      <div className={s.wrapper}>
        <div className={s.left}>
          <img src={`${import.meta.env.VITE_BACKEND_URL}${film.img}`} alt="картинка" />
          <WatchDate />
        </div>
        <div className={s.right}>
          <Typography tag="h2" variant="t2" text={t('film.name', { film })} />
          <FilmDirectors directors={film.directors} />
          <FIlmGenreCountryYear genres={film.genres} country={film.country} date={film.releaseDate} />
          <FilmRating rating={film.userRatings.kinopoisk} company={t('global.kinopoisk')} />
          <div className={s.description}>
            <Typography tag="p" className="ellipsis" variant="t3" text={film.description} />
          </div>
        </div>
      </div>
    )
  }
}
