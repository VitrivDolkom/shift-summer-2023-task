import { useAppDispatch, useAppSelector } from '@/store'
import { useEffect } from 'react'

import { chooseSchedule, chooseSeance, setDefaultSchedule, setDefaultSeance } from '../model/slice'
import { fetchFilmSchedule } from '../model/thunk'
import { FilmScheduleComponent } from './FilmScheduleComponent'

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
    return <div>Pending ...</div>
  }

  if (request.status === 'error') {
    return <div>Error </div>
  }

  return (
    <>
      {schedules.length && currentSchedule && (
        <FilmScheduleComponent
          schedules={schedules}
          currentSchedule={currentSchedule}
          currentSeance={currentSeance}
          onScheduleClick={(schedule) => dispatch(chooseSchedule(schedule))}
          onSeanceClick={(seance) => dispatch(chooseSeance(seance))}
        />
      )}
    </>
  )
}
