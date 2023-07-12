import { useAppDispatch, useAppSelector } from '@/store'
import { useEffect } from 'react'

import { fetchPosterMovies } from '@/modules/PosterFilms'

import { PosterFilmCard } from '../PosterFilmCard/PosterFilmCard'

import s from './styles.module.css'
import { PosterFilmsSkeleton } from '../PosterFilmsSkeleton/PosterFilmsSkeleton'

export const PosterFilms = () => {
  const dispatch = useAppDispatch()

  const { films, request } = useAppSelector((state) => state.posterFilms)

  useEffect(() => {
    if (request.status === 'idle') {
      dispatch(fetchPosterMovies())
    }
  }, [])

  if (request.error) {
    return <h1>Error ...</h1>
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
