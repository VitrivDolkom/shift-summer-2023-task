import { useAppDispatch, useAppSelector } from '@/store'
import { useEffect } from 'react'

import { FilmRating } from '@/shared/uikit/FilmRating'

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
        <img src={film.img} alt="картинка" />
        <div className={s.watchDate}>в прокате</div>
        <div className={s.watchDate}></div>
      </div>
      <div className={s.right}>
        <div className={s.name}></div>
        <div className={s.director}></div>
        <div className={s.mainInfo}></div>
        <FilmRating rating={film.userRatings.kinopoisk} />
        <div className={s.description}>{film.description}</div>
      </div>
    </div>
  )
}
