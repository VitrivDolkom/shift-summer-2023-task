import { useAppDispatch, useAppSelector } from '@/store'
import { useEffect } from 'react'

import { type FilmInfoProps } from '../lib/types'
import { fetchFilmInfo } from '../model/thunk'

import s from './styles.module.css'

export const FilmInfo = ({ id }: FilmInfoProps) => {
  const dispatch = useAppDispatch()
  const { film, request } = useAppSelector((state) => state.filmInfo)

  useEffect(() => {
    if (request.status === 'idle' || request.status === 'success') {
      dispatch(fetchFilmInfo(id))
    }
  }, [])

  if (request.status === 'pending') {
    return <h1 className={s.title}>Pending...</h1>
  }

  if (request.status === 'error') {
    return <h1>No such film</h1>
  }

  return <h1 className={s.title}>{film?.name || 'dima'}</h1>
}
