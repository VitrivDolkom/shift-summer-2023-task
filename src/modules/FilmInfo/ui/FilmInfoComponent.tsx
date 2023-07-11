import { FilmRating } from '@/shared/components'
import { Typography } from '@/shared/uikit'

import { FilmDirectors } from '../components/FilmDirectors'
import { FIlmGenreCountryYear } from '../components/FIlmGenreCountryYear'
import { WatchDate } from '../components/WatchDate'

import s from './styles.module.css'

interface Props {
  film: api.Film
}

export const FilmInfoComponent = ({ film }: Props) => {
  const { img, name, directors, country, genres, releaseDate, userRatings, description } = film

  return (
    <div className={s.wrapper}>
      <div className={s.left}>
        <img src={`${import.meta.env.VITE_BACKEND_URL}${img}`} alt="картинка" />
        <WatchDate />
      </div>
      <div className={s.right}>
        <Typography variant="t2" text={name} />
        <FilmDirectors directors={directors} />
        <FIlmGenreCountryYear genres={genres} country={country} date={releaseDate} />
        <FilmRating rating={userRatings.kinopoisk} company="кинопоиск" />
        <div className={s.description}>
          <Typography className="ellipsis" variant="t3" text={description} />
        </div>
      </div>
    </div>
  )
}
