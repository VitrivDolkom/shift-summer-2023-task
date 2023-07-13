import { useAppDispatch, useAppSelector } from '@/store'
import { useEffect } from 'react'

import waiting from '@/assets/gif/waiting.gif'
import {
  chooseSchedule,
  chooseSeance,
  fetchFilmSchedule,
  setDefaultSchedule,
  setDefaultSeance
} from '@/modules/FilmSchedule/'
import { Loader } from '@/shared/components'

import { CurrentSchedule } from './CurrentSchedule'
import { SchedulesDate } from './SchedulesDate'

import s from './styles.module.css'

interface FilmScheduleProps {
  id: string
}

export const FilmSchedule = ({ id }: FilmScheduleProps) => {
  const dispatch = useAppDispatch()
  const { schedules, currentSchedule, currentSeance, request } = useAppSelector(
    (state) => state.filmSchedule
  )

  useEffect(() => {
    if (request.status === 'idle' || request.status === 'success') {
      dispatch(fetchFilmSchedule(id))
    }
  }, [])

  useEffect(() => {
    dispatch(setDefaultSchedule())
  }, [schedules])

  useEffect(() => {
    dispatch(setDefaultSeance())
  }, [currentSchedule, schedules])

  if (request.status === 'pending') {
    return <Loader wrapperClassName={s.pending} img={waiting} message="Расписание загружается ..." />
  }

  if (request.status === 'error' || !currentSchedule) {
    return <div>Error </div>
  }

  return (
    <div className={s.wrapper}>
      <div className={s.title}>Расписание</div>
      <SchedulesDate
        schedules={schedules}
        currentSchedule={currentSchedule}
        onScheduleClick={(schedule) => dispatch(chooseSchedule(schedule))}
      />
      <CurrentSchedule
        schedule={currentSchedule}
        currentSeance={currentSeance}
        onSeanceClick={(seance) => dispatch(chooseSeance(seance))}
      />
    </div>
  )
}
