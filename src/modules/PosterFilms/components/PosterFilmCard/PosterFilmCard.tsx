import { Button } from '@/shared/uikit/Button'
import { FilmRating } from '@/shared/uikit/FilmRating'

import { Country, Film } from '../../model/types'

import s from './styles.module.css'

interface Props {
  film: Film
}

const countryAndYear = (country: Country | undefined, date: string): string => {
  const dateArray = date.split(' ')
  const year = dateArray[dateArray.length - 1]
  return `${country !== undefined ? `${country}, ` : ''}${year}`
}

export const PosterFilmCard = ({ film }: Props) => {
  const { id, genres, country, releaseDate, img, name, originalName, userRatings } = film
  
  return (
    <div className={s.card}>
      <div className={s.top}>
        <div className={s.genres}>{genres.slice(0, 2).join(', ')} ...</div>
        <div className={s.topInfo}>{countryAndYear(country, releaseDate)}</div>
      </div>
      <div className={s.img}></div>
      <div className={s.bottom}>
        <div className={s.name}>{name}</div>
        <div className={s.originalName}>{originalName}</div>
        <FilmRating rating={userRatings.kinopoisk} />
        <Button type="info" />
      </div>
    </div>
  )
}
