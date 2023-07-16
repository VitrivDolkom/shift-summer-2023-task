import s from './styles.module.css'

interface Props {
  schedules: api.Schedule[]
  currentSchedule: api.Schedule
  onScheduleClick: (schedule: api.Schedule) => void
}

export const SchedulesDate = ({ schedules, currentSchedule, onScheduleClick }: Props) => (
  <div className={s.schedulesDate}>
    {schedules.map((schedule, index) => {
      const classNames = [s.date, schedule.date === currentSchedule.date ? s.currentDate : ''].join(' ')

      return (
        <div key={index} onClick={() => onScheduleClick(schedule)} className={classNames}>
          {schedule.date}
        </div>
      )
    })}
  </div>
)
