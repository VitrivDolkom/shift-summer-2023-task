export interface FilmScheduleProps {
  id: string
}

interface FilmSeanceHall {
  name: string
  places: string[]
}

interface FilmSeanceTime {
  date: string
  time: string
}

interface FilmTicket {
  filmId: string
  row: 1
  column: 1
  seance: FilmSeanceTime
  phone: string
}

interface FilmSeance {
  time: string
  hall: FilmSeanceHall
  payedTickets: FilmTicket[]
}

export interface FilmSchedule {
  date: string
  seances: FilmSeance[]
}
