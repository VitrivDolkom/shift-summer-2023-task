import { getReleaseYear } from '@/shared/lib'

import s from './styles.module.css'

interface FilmCountryAndYearProps {
  country?: api.Country
  date: string
}

export const FilmCountryAndYear = ({ country, date }: FilmCountryAndYearProps) => (
  <div className={s.topInfo}>
    {!!country && `${country.name}, `}
    {getReleaseYear(date)}
  </div>
)
