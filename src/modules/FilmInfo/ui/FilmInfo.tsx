import { useAppDispatch, useAppSelector } from '@/store'
import { useEffect } from 'react'

import { fetchFilmInfo } from '../model/thunk'

interface Props {
  id: string
}

export const FilmInfo = ({ id }: Props) => {
  const dispatch = useAppDispatch()
  const { film, request } = useAppSelector((state) => state.filmInfo)

  useEffect(() => {
    if (request.status === 'idle') {
      dispatch(fetchFilmInfo(id))
    }
  }, [])

  if (request.status === 'pending') {
    return <h1>Pending...</h1>
  }

  if (request.status === 'error') {
    return <h1>No such film</h1>
  }

  return <h1>{film?.name}</h1>
}
