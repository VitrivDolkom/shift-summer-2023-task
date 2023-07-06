import { type FilmSeance } from '@/modules/FilmSchedule'
import { SeancePlaces } from '../components/SeancePlaces'

import s from './styles.module.css'

interface ChoiceFilmTicketsComponentProps {
  seance: FilmSeance
}

export const ChoiceFilmTicketsComponent = ({ seance }: ChoiceFilmTicketsComponentProps) => {
  return (
    <div className={s.wrapper}>
      <div className={s.left}>
        <div className={s.top}>Экран</div>
        <SeancePlaces seance={seance} />
      </div>
      <div className={s.right}></div>
    </div>
  )
}
