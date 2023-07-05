import { FilmPerson } from '../lib/types'

import s from '../ui/styles.module.css'

interface Props {
  directors: FilmPerson[]
}

export const FilmDirectors = ({ directors }: Props) => (
  <div className={s.director}>
    Режиссер{directors.length > 1 ? 'ы' : ''}:{' '}
    {directors.map((director, idx) => `${director.fullName}${idx !== directors.length - 1 ? ', ' : ''}`)}
  </div>
)
