import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { FilmRating } from '@/shared/components'
import { Button, Typography } from '@/shared/uikit'

import { FilmCountryAndYear } from './FilmCountryAndYear'

import s from './styles.module.css'

interface PosterFilmCardProps {
  film: api.Film
}

export const PosterFilmCard = ({ film }: PosterFilmCardProps) => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { id, genres, country, releaseDate, img, userRatings } = film

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
          <div className={s.name}>{t('film.name', { film })}</div>

          <div className={s.originalName}>
            <Typography tag="p" text={t('film.original_name', { film })} variant="sub2" />
          </div>
          <FilmRating rating={userRatings.kinopoisk} company={t('global.kinopoisk')} />
        </div>
        <Button styleType="solid" onClick={onMoreInfoClick}>
          <Typography tag="p" text={t('poster.more_info')} variant="btn1" />
        </Button>
      </footer>
    </div>
  )
}
