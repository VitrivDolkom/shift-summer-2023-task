import { useAppDispatch, useAppSelector } from '@/store'
import { useEffect } from 'react'

import { FilmRating } from '@/shared/uikit/FilmRating'

import { FilmDirectors } from '../components/FilmDirectors'
import { FIlmGenreCountryYear } from '../components/FIlmGenreCountryYear'
import { WatchDate } from '../components/WatchDate'
import { type FilmInfoProps } from '../lib/types'
import { fetchFilmInfo } from '../model/thunk'

import s from './styles.module.css'

export const FilmInfo = ({ id }: FilmInfoProps) => {
  const dispatch = useAppDispatch()
  const { film, request } = useAppSelector((state) => state.filmInfo)

  useEffect(() => {
    if (request.status === 'idle' || request.status === 'success') {
      dispatch(fetchFilmInfo(id))
    }
  }, [])

  if (request.status === 'pending') {
    return <h1 className={s.title}>Pending...</h1>
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
        <div className={s.name}>{film.name}</div>
        <FilmDirectors directors={film.directors} />
        <FIlmGenreCountryYear genres={film.genres} country={film?.country} date={film.releaseDate} />
        <FilmRating rating={film.userRatings.kinopoisk} />
        <div className={s.description}>{film.description}</div>
      </div>
    </div>
  )
}
