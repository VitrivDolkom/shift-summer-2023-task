import { LocalizedTypography } from '@/shared/components'

import s from './styles.module.css'

interface Props {
  directors: api.FilmPerson[]
}

export const FilmDirectors = ({ directors }: Props) => (
  <div className={s.director}>
    <LocalizedTypography tag="span" tKey="film.director" tOptions={{ count: directors.length }} />
    {directors.map(
      (director, index) => `${director.fullName}${index !== directors.length - 1 ? ', ' : ''}`
    )}
  </div>
)
