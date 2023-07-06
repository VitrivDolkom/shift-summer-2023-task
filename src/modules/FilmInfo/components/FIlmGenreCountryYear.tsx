import { getReleaseYear } from '@/shared/lib/date'

import { Country, Genre } from '../lib/types'

import s from '../ui/styles.module.css'

interface Props {
  genres: Genre[]
  country?: Country
  date: string
}

export const FIlmGenreCountryYear = ({ genres, country, date }: Props) => (
  <div className={s.mainInfo}>
    {genres[0]}
    {country !== undefined ? `, ${country.name}` : ''}, {getReleaseYear(date)}
  </div>
)
