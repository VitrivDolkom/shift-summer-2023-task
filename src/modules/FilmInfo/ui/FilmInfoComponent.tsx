import { FilmRating } from '@/shared/uikit/FilmRating'

import { FilmDirectors } from '../components/FilmDirectors'
import { FIlmGenreCountryYear } from '../components/FIlmGenreCountryYear'
import { WatchDate } from '../components/WatchDate'
import { Film } from '../lib/types'

import s from './styles.module.css'

interface Props {
  film: Film
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
        <div className={s.name}>{name}</div>
        <FilmDirectors directors={directors} />
        <FIlmGenreCountryYear genres={genres} country={country} date={releaseDate} />
        <FilmRating rating={userRatings.kinopoisk} />
        <div className={s.description}>{description}</div>
      </div>
    </div>
  )
}
