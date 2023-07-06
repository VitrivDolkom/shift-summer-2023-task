import { seancesTime, seanceStyle } from '../lib/seances'
import { FilmSchedule, FilmSeance } from '../lib/types'

import s from '../ui/styles.module.css'

interface Props {
  schedule: FilmSchedule
  currentSeance?: FilmSeance
  onSeanceClick: (seance: FilmSeance) => void
}

export const CurrentSchedule = ({ schedule, currentSeance, onSeanceClick }: Props) => (
  <div className={s.timeLine}>
    {seancesTime.map((time, index) => (
      <div key={index} className={s.time} style={seanceStyle(time.str)}>
        <div className={s.line}></div>
        <div className={s.timeString}>{time.str}</div>
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
