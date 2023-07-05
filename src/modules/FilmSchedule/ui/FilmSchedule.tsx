import { useAppDispatch, useAppSelector } from '@/store'
import { useEffect } from 'react'

import { FilmScheduleComponent } from '../components/FilmScheduleComponent'
import { FilmScheduleProps } from '../lib/types'
import { chooseSchedule, setDefaultSchedule } from '../model/slice'
import { fetchFilmSchedule } from '../model/thunk'

export const FilmSchedule = ({ id }: FilmScheduleProps) => {
  const dispatch = useAppDispatch()
  const { schedules, currentSchedule, request } = useAppSelector((state) => state.filmSchedule)

  useEffect(() => {
    if (request.status === 'idle') {
      dispatch(fetchFilmSchedule(id))
    }
  }, [])

  useEffect(() => {
    if (currentSchedule === undefined) {
      dispatch(setDefaultSchedule())
    }
  }, [schedules])

  if (request.status === 'pending') {
    return <div>Pending ...</div>
  }

  if (request.status === 'error') {
    return <div>Error </div>
  }

  return (
    <FilmScheduleComponent
      schedules={schedules}
      currentSchedule={currentSchedule}
      onScheduleClick={(schedule) => dispatch(chooseSchedule(schedule))}
    />
  )
}
