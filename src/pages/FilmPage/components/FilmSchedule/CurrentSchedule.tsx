import classNames from 'classnames/bind'

import { Typography } from '@/shared/uikit'

import { seancesTime, seanceStyle } from './seances'

import s from './styles.module.css'

interface Props {
  schedule: api.Schedule
  currentSeance?: api.ScheduleSeance
  onSeanceClick: (seance: api.ScheduleSeance) => void
}

const cx = classNames.bind(s)

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
        className={cx({
          seanceTime: true,
          active: seance.time === currentSeance?.time,
          red: seance.hall.name === 'Red',
          green: seance.hall.name === 'Green',
          blue: seance.hall.name === 'Blue'
        })}
        style={seanceStyle(seance.time, index, schedule.seances.length)}
      >
        {seance.time}
      </div>
    ))}
  </div>
)
