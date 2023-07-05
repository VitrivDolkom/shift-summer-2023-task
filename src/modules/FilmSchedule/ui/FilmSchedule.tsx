import { useAppDispatch, useAppSelector } from '@/store'
import { useEffect } from 'react'

import { FilmScheduleComponent } from '../compnents/FilmScheduleComponent'
import { FilmScheduleProps } from '../lib/types'
import { fetchFilmSchedule } from '../model/thunk'

export const FilmSchedule = ({ id }: FilmScheduleProps) => {
  const dispatch = useAppDispatch()
  const { schedules, request } = useAppSelector((state) => state.filmSchedule)

  useEffect(() => {
    if (request.status === 'idle') {
      dispatch(fetchFilmSchedule(id))
    }
  }, [])

  if (request.status === 'pending') {
    return <div>Pending ...</div>
  }

  if (request.status === 'error') {
    return <div>Error </div>
  }

  return <FilmScheduleComponent schedules={schedules} />
}
