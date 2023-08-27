import { useFilmsQuery } from '@/shared/api'
import { Typography } from '@/shared/uikit'

import { PosterFilmCard } from '../PosterFilmCard/PosterFilmCard'
import { PosterFilmsSkeleton } from '../PosterFilmsSkeleton/PosterFilmsSkeleton'

import s from './styles.module.css'

export const PosterFilms = () => {
  const { data, isLoading, isError } = useFilmsQuery()

  if (isError) {
    return <Typography variant="err1" text="Ошибка загрузки афиши" />
  }

  if (isLoading) {
    return <PosterFilmsSkeleton />
  }

  return (
    <div className={s.films}>
      {data?.map((film) => (
        <PosterFilmCard key={film.id} film={film} />
      ))}
    </div>
  )
}
