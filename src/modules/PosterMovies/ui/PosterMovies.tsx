import { useAppDispatch, useAppSelector } from '@/store'
import { useEffect } from 'react'

import { fetchPosterMovies } from '../model/thunk'

export const PosterMovies = () => {
  const dispatch = useAppDispatch()

  const { posterMovies, status, error } = useAppSelector((state) => state.posterMovies)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosterMovies())
    }
  }, [])

  if (error) {
    return <h1>Error ...</h1>
  }

  if (status === 'pending') {
    return <h1>Pending ...</h1>
  }

  return <h1>loaded</h1>
}
