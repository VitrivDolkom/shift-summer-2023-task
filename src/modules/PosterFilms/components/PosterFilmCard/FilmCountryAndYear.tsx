import { Country } from '@/modules/FilmInfo'
import { getReleaseYear } from '@/shared/lib/date'

import s from './styles.module.css'

interface FilmCountryAndYearProps {
  country?: Country
  date: string
}

export const FilmCountryAndYear = ({ country, date }: FilmCountryAndYearProps) => (
  <div className={s.topInfo}>
    {!!country && `${country.name}, `}
    {getReleaseYear(date)}
  </div>
)
