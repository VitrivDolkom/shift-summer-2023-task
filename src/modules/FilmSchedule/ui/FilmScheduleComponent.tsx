import { CurrentSchedule } from '../components/CurrentSchedule'
import { SchedulesDate } from '../components/SchedulesDate'
import { FilmSchedule, FilmSeance } from '../lib/types'

import s from './styles.module.css'

interface FilmScheduleComponentProps {
  schedules: FilmSchedule[]
  currentSchedule: FilmSchedule
  currentSeance?: FilmSeance
  onScheduleClick: (schedule: FilmSchedule) => void
  onSeanceClick: (seance: FilmSeance) => void
}

export const FilmScheduleComponent = ({
  schedules,
  currentSchedule,
  currentSeance,
  onScheduleClick,
  onSeanceClick
}: FilmScheduleComponentProps) => (
  <div className={s.wrapper}>
    <div className={s.title}>Расписание</div>
    <SchedulesDate
      schedules={schedules}
      currentSchedule={currentSchedule}
      onScheduleClick={onScheduleClick}
    />
    <CurrentSchedule
      schedule={currentSchedule}
      currentSeance={currentSeance}
      onSeanceClick={onSeanceClick}
    />
  </div>
)
