import { FilmSchedule } from '../lib/types'
import { CurrentSchedule } from './CurrentSchedule'
import { SchedulesDate } from './SchedulesDate'

import s from './styles.module.css'

interface Props {
  schedules: FilmSchedule[]
  currentSchedule?: FilmSchedule
  onScheduleClick: (schedule: FilmSchedule) => void
}

export const FilmScheduleComponent = ({ schedules, currentSchedule, onScheduleClick }: Props) => {
  if (!schedules.length || !currentSchedule) {
    return null
  }
  console.log(currentSchedule)

  return (
    <div className={s.wrapper}>
      <div className={s.title}>Расписание</div>
      <SchedulesDate
        schedules={schedules}
        currentSchedule={currentSchedule}
        onScheduleClick={onScheduleClick}
      />
      <CurrentSchedule schedule={currentSchedule} />
    </div>
  )
}
