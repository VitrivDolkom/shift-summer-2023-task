import { FilmSeancePlace } from '@/shared/uikit/SeancePlace'

export interface FilmScheduleProps {
  id: string
}

interface FilmSeanceTime {
  date: string
  time: string
}

interface FilmTicket {
  filmId: string
  row: number
  column: number
  seance: FilmSeanceTime
  phone: string
}

export interface FilmSeance {
  time: string
  hall: FilmSeanceHall
  payedTickets: FilmTicket[]
}

interface FilmSeanceHall {
  name: string
  places: FilmSeancePlace[][]
}

export interface FilmSchedule {
  date: string
  seances: FilmSeance[]
}
