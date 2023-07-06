export interface SeancePlaceProps {
  place: FilmSeancePlace
  rowIndex: number
  placeIndex: number
}

export interface FilmSeancePlace {
  price: number
  type: SeancePlaceType
}

export type SeancePlaceType = 'ECONOM' | 'COMFORT' | 'BLOCKED'