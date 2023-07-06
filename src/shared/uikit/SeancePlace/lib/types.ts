export interface SeancePlaceProps {
  place: FilmSeancePlace
}

export interface FilmSeancePlace {
  price: number
  type: SeancePlaceType
}

export type SeancePlaceType = 'ECONOM' | 'COMFORT' | 'BLOCKED'