import { FilmSeance } from '@/modules/FilmSchedule'
import { SeancePlace } from '@/shared/uikit/SeancePlace/ui/SeancePlace'

import s from '../ui/styles.module.css'

interface SeanceSeatsProps {
  seance: FilmSeance
}

export const SeancePlaces = ({ seance }: SeanceSeatsProps) => {
  console.log(seance)
  return (
    <div className={s.places}>
      {seance.hall.places.map((row, index) => (
        <div key={index} className={s.row}>
          {row.map((place, index) => (
            <SeancePlace key={index} place={place} />
          ))}
        </div>
      ))}
    </div>
  )
}
