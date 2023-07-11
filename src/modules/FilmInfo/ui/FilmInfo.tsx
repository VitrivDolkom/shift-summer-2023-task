import { useAppDispatch, useAppSelector } from '@/store'
import { useEffect } from 'react'

import { fetchFilmInfo } from '../model/thunk'
import { FilmInfoComponent } from './FilmInfoComponent'

interface FilmInfoProps {
  id: string
}

export const FilmInfo = ({ id }: FilmInfoProps) => {
  const dispatch = useAppDispatch()
  const { film, request } = useAppSelector((state) => state.filmInfo)

  useEffect(() => {
    if (request.status === 'idle' || request.status === 'success') {
      dispatch(fetchFilmInfo(id))
    }
  }, [])

  if (request.status === 'pending') {
    return <h1>Pending...</h1>
  }

  if (request.status === 'error' || film === undefined) {
    return <h1>No such film</h1>
  }

  return <FilmInfoComponent film={film} />
}
