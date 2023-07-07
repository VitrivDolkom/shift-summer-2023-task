import { HallName } from '@/shared/lib/schedule'
import { FilmSeancePlace } from '@/shared/uikit/SeancePlace'

export interface FilmScheduleProps {
  id: string
}

export interface FilmSeanceTime {
  date: string
  time: string
}

export interface FilmTicket {
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
  name: HallName
  places: FilmSeancePlace[][]
}

export interface FilmSchedule {
  date: string
  seances: FilmSeance[]
}
