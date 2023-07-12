
import s from './styles.module.css'

interface Props {
  directors: api.FilmPerson[]
}

export const FilmDirectors = ({ directors }: Props) => (
  <div className={s.director}>
    Режиссер{directors.length > 1 ? 'ы' : ''}:{' '}
    {directors.map(
      (director, index) => `${director.fullName}${index !== directors.length - 1 ? ', ' : ''}`
    )}
  </div>
)
