import { Country } from '@/modules/FilmInfo'
import { getReleaseYear } from '@/shared/lib/date'

import s from './styles.module.css'

interface Props {
  country?: Country
  date: string
}

export const FilmCountryAndYear = ({ country, date }: Props) => (
  <div className={s.topInfo}>
    {country !== undefined ? `${country}, ` : ''}
    {getReleaseYear(date)}
  </div>
)
