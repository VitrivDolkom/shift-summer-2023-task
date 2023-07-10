import { getReleaseYear } from '@/shared/lib'

import s from '../ui/styles.module.css'

interface Props {
  genres: api.Genre[]
  country?: api.Country
  date: string
}

export const FIlmGenreCountryYear = ({ genres, country, date }: Props) => (
  <div className={s.mainInfo}>
    {genres[0]}
    {country !== undefined ? `, ${country.name}` : ''}, {getReleaseYear(date)}
  </div>
)
