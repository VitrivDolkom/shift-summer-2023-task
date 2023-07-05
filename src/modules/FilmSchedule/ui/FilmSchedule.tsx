import { useAppDispatch, useAppSelector } from '@/store'
import { useEffect } from 'react'

import { FilmScheduleProps } from '../lib/types'
import { chooseSchedule, chooseSeance, setDefaultSchedule, setDefaultSeance } from '../model/slice'
import { fetchFilmSchedule } from '../model/thunk'
import { FilmScheduleComponent } from './FilmScheduleComponent'

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
  }, [currentSchedule])

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
      currentSeance={currentSeance}
      onScheduleClick={(schedule) => dispatch(chooseSchedule(schedule))}
      onSeanceClick={(seance) => dispatch(chooseSeance(seance))}
    />
  )
}
