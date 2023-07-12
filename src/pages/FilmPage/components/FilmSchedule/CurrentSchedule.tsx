import { Typography } from '@/shared/uikit'

import { seancesTime, seanceStyle } from './seances'

import s from './styles.module.css'

interface Props {
  schedule: api.Schedule
  currentSeance?: api.ScheduleSeance
  onSeanceClick: (seance: api.ScheduleSeance) => void
}

export const CurrentSchedule = ({ schedule, currentSeance, onSeanceClick }: Props) => (
  <div className={s.timeLine}>
    {seancesTime.map((time, index) => (
      <div key={index} className={s.time} style={seanceStyle(time.str)}>
        <div className={s.line}></div>
        <Typography className="centered" variant="sub1" text={time.str} />
      </div>
    ))}
    {schedule.seances.map((seance, index) => (
      <div
        key={index}
        onClick={() => onSeanceClick(seance)}
        className={[s.seanceTime, seance.time === currentSeance?.time ? s.active : ''].join(' ')}
        style={seanceStyle(seance.time)}
      >
        {seance.time}
      </div>
    ))}
  </div>
)
