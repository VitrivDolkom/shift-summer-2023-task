import { useEffect } from 'react'

import waiting from '@/assets/gif/waiting.gif'
import { useFilmSchedulesQuery } from '@/shared/api'
import { Loader } from '@/shared/components'
import { Typography } from '@/shared/uikit'

import { CurrentSchedule } from './CurrentSchedule'
import { SchedulesDate } from './SchedulesDate'

import s from './styles.module.css'

interface FilmScheduleProps {
  id: string
  schedule?: api.Schedule
  seance?: api.ScheduleSeance
  onScheduleChange: (schedule: api.Schedule) => void
  onSeanceChange: (seance: api.ScheduleSeance) => void
}

export const FilmSchedule = (props: FilmScheduleProps) => {
  const { id, schedule, seance, onScheduleChange, onSeanceChange } = props
  const filmSchedulesQuery = useFilmSchedulesQuery(id)

  useEffect(() => {
    if (filmSchedulesQuery.isSuccess) {
      onScheduleChange(filmSchedulesQuery.data[0])
    }
  }, [filmSchedulesQuery.isSuccess])

  if (filmSchedulesQuery.isLoading) {
    return <Loader wrapperClassName={s.pending} img={waiting} message="Расписание загружается ..." />
  }

  if (filmSchedulesQuery.isError || !schedule) {
    return <Typography variant="err1" text={filmSchedulesQuery.error?.message} />
  }

  if (filmSchedulesQuery.isSuccess) {
    return (
      <div className={s.wrapper}>
        <div className={s.title}>Расписание</div>
        <SchedulesDate
          schedules={filmSchedulesQuery.data}
          currentSchedule={schedule}
          onScheduleClick={(schedule) => onScheduleChange(schedule)}
        />
        <CurrentSchedule
          schedule={schedule}
          currentSeance={seance}
          onSeanceClick={(seance) => onSeanceChange(seance)}
        />
      </div>
    )
  }
}
