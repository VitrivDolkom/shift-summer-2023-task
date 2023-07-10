import { CurrentSchedule } from '../components/CurrentSchedule'
import { SchedulesDate } from '../components/SchedulesDate'

import s from './styles.module.css'

interface FilmScheduleComponentProps {
  schedules: api.Schedule[]
  currentSchedule: api.Schedule
  currentSeance?: api.ScheduleSeance
  onScheduleClick: (schedule: api.Schedule) => void
  onSeanceClick: (seance: api.ScheduleSeance) => void
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
