import { FilmSchedule } from '../lib/types'

import s from './styles.module.css'

interface Props {
  schedule: FilmSchedule
}


export const CurrentSchedule = ({schedule}: Props) => (
  <div>{schedule.date}</div>
)