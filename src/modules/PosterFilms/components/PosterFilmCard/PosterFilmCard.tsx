import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Country, Film } from '@/modules/FilmInfo'
import { instance } from '@/shared/api'
import { Button } from '@/shared/uikit/Button'
import { FilmRating } from '@/shared/uikit/FilmRating'

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
  const navigate = useNavigate()

  const onMoreInfoClick = () => {
    navigate(`/poster/${id}`)
  }

  return (
    <div className={s.card}>
      <div className={s.top}>
        <div className={s.genres}>{genres.slice(0, 2).join(', ')} ...</div>
        <div className={s.topInfo}>{countryAndYear(country, releaseDate)}</div>
      </div>
      <div className={s.img}>
        <img src={`${import.meta.env.VITE_BACKEND_URL}${img}`} alt="" />
      </div>
      <div className={s.bottom}>
        <div className={s.name}>{name}</div>
        <div className={s.originalName}>{originalName}</div>
        <FilmRating rating={userRatings.kinopoisk} />
        <Button type="info" onClick={onMoreInfoClick} />
      </div>
    </div>
  )
}
