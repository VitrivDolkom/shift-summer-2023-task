import { useNavigate } from 'react-router-dom'

import { FilmRating } from '@/shared/components'
import { Button } from '@/shared/uikit/Button'

import { FilmCountryAndYear } from './FilmCountryAndYear'

import s from './styles.module.css'

interface PosterFilmCardProps {
  film: api.Film
}

export const PosterFilmCard = ({ film }: PosterFilmCardProps) => {
  const { id, genres, country, releaseDate, img, name, originalName, userRatings } = film
  const navigate = useNavigate()

  const onMoreInfoClick = () => {
    navigate(`/poster/${id}`)
  }

  return (
    <div className={s.card}>
      <div className={s.top}>
        <div className={s.genres}>{genres.slice(0, 2).join(', ')} ...</div>
        <FilmCountryAndYear country={country} date={releaseDate} />
      </div>
      <div className={s.content}>
        <div className={s.img}>
          <img src={`${import.meta.env.VITE_BACKEND_URL}${img}`} alt="картинка" />
        </div>
      </div>
      <footer className={s.footer}>
        <div className={s.bottom}>
          <div className={s.name}>{name}</div>
          <div className={s.originalName}>{originalName}</div>
          <FilmRating rating={userRatings.kinopoisk} company="кинопоиск" />
        </div>
        <Button styleType="solid" onClick={onMoreInfoClick}>
          <p>Подробнее</p>
        </Button>
      </footer>
    </div>
  )
}
