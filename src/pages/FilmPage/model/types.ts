import { UserInfo } from '@/modules/FillUserInfo'
import { FilmSeanceTime } from '@/modules/FilmSchedule'
import { TicketPlaceCoordinates } from '@/shared/uikit/SeancePlace'

export interface FilmTicketsOrder {
  filmId: string
  person: UserInfo
  seance: FilmSeanceTime
  tickets: TicketPlaceCoordinates[]
}
