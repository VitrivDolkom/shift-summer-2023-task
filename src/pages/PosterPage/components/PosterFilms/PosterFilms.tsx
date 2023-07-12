import { useAppDispatch, useAppSelector } from '@/store'
import { useEffect } from 'react'

import { fetchPosterMovies } from '@/modules/PosterFilms'

import { PosterFilmCard } from '../PosterFilmCard/PosterFilmCard'

import s from './styles.module.css'

export const PosterFilms = () => {
  const dispatch = useAppDispatch()

  const { films, request } = useAppSelector((state) => state.posterMovies)

  useEffect(() => {
    if (request.status === 'idle') {
      dispatch(fetchPosterMovies())
    }
  }, [])

  if (request.error) {
    return <h1>Error ...</h1>
  }

  if (request.status === 'pending') {
    return <h1>Pending ...</h1>
  }

  return (
    <div className={s.films}>
      {films.map((film) => (
        <PosterFilmCard key={film.id} film={film} />
      ))}
    </div>
  )
}
