import { getReleaseYear } from '@/shared/lib'
import { Typography } from '@/shared/uikit'

import s from './styles.module.css'

interface Props {
  genres: api.Genre[]
  country?: api.Country
  date: string
}

export const FIlmGenreCountryYear = ({ genres, country, date }: Props) => (
  <div className={s.mainInfo}>
    <Typography
      variant="sub1"
      text={`${genres[0]}
      ${country !== undefined ? `, ${country.name}` : ''}, ${getReleaseYear(date)}`}
    />
  </div>
)
