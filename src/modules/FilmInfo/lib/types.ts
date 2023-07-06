export type Profession = 'ACTOR' | 'DIRECTOR'
export type AgeRating = 'G'
export type Genre = string

export interface FilmInfoProps {
  id: string
}

export interface FilmPerson {
  id: string
  professions: Profession
  fullName: string
}

export interface FilmUserRating {
  kinopoisk: number
  imdb: number
}

export interface Country {
  id: number
  name: string
  code: string
  code2: string
}

export interface Film {
  id: string
  name: string
  originalName: string
  description: string
  releaseDate: string
  actors: FilmPerson[]
  directors: FilmPerson[]
  runtime: number
  ageRating: AgeRating
  genres: Genre[]
  userRatings: FilmUserRating
  img: string
  country?: Country
}
