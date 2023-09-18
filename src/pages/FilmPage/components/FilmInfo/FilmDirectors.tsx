import { Translation } from 'react-i18next'

import s from './styles.module.css'

interface Props {
  directors: api.FilmPerson[]
}

export const FilmDirectors = ({ directors }: Props) => (
  <Translation>
    {(t) => (
      <div className={s.director}>
        {t('film.director', { count: directors.length })}
        {directors.map(
          (director, index) => `${director.fullName}${index !== directors.length - 1 ? ', ' : ''}`
        )}
      </div>
    )}
  </Translation>
)
