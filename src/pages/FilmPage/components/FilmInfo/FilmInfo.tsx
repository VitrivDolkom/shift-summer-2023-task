import { useAppDispatch, useAppSelector } from '@/store'
import { useEffect } from 'react'

import { fetchFilmInfo } from '@/modules/FilmInfo'
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
  const dispatch = useAppDispatch()
  const { film, request } = useAppSelector((state) => state.filmInfo)

  useEffect(() => {
    if (request.status === 'idle' || request.status === 'success') {
      dispatch(fetchFilmInfo(id))
    }
  }, [])

  if (request.status === 'pending') {
    return <FilmInfoSkeleton />
  }

  if (request.status === 'error' || film === undefined) {
    return <h1>No such film</h1>
  }

  return (
    <div className={s.wrapper}>
      <div className={s.left}>
        <img src={`${import.meta.env.VITE_BACKEND_URL}${film.img}`} alt="картинка" />
        <WatchDate />
      </div>
      <div className={s.right}>
        <Typography tag="h2" variant="t2" text={film.name} />
        <FilmDirectors directors={film.directors} />
        <FIlmGenreCountryYear genres={film.genres} country={film.country} date={film.releaseDate} />
        <FilmRating rating={film.userRatings.kinopoisk} company="кинопоиск" />
        <div className={s.description}>
          <Typography tag="p" className="ellipsis" variant="t3" text={film.description} />
        </div>
      </div>
    </div>
  )
}
