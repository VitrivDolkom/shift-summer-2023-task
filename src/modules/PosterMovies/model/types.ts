export type StatusType = 'idle' | 'success' | 'error' | 'pending'

export interface PosterMoviesState {
  posterMovies: PosterMovie[]
  status: StatusType
  error?: string
}

export interface PosterMovie {
  title: string
}