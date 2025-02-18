import { useAppDispatch, useAppSelector } from '@/store'
import { useEffect } from 'react'

import { fetchPosterMovies } from '@/modules/PosterFilms'
import { Typography } from '@/shared/uikit'

import { PosterFilmCard } from '../PosterFilmCard/PosterFilmCard'
import { PosterFilmsSkeleton } from '../PosterFilmsSkeleton/PosterFilmsSkeleton'

import s from './styles.module.css'

export const PosterFilms = () => {
  const dispatch = useAppDispatch()
  const { films, request } = useAppSelector((state) => state.posterFilms)

  useEffect(() => {
    if (request.status === 'idle') {
      dispatch(fetchPosterMovies())
    }
  }, [])

  if (request.error) {
    return <Typography variant="err1" text="Ошибка загрузки афиши" />
  }

  if (request.status === 'pending') {
    return <PosterFilmsSkeleton />
  }

  return (
    <div className={s.films}>
      {films.map((film) => (
        <PosterFilmCard key={film.id} film={film} />
      ))}
    </div>
  )
}
