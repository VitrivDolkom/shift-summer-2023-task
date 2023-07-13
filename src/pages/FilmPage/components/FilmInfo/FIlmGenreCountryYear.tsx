import { getReleaseYear } from '@/shared/lib'
import { Typography } from '@/shared/uikit'

import s from './styles.module.css'

interface FIlmGenreCountryYearProps {
  genres: api.Genre[]
  country?: api.Country
  date: string
}

export const FIlmGenreCountryYear = ({ genres, country, date }: FIlmGenreCountryYearProps) => (
  <div className={s.mainInfo}>
    <Typography
      tag="p"
      variant="sub1"
      text={`${genres[0]}
      ${country !== undefined ? `, ${country.name}` : ''}, ${getReleaseYear(date)}`}
    />
  </div>
)
