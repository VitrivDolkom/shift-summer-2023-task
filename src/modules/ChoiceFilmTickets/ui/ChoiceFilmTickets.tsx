import { useAppSelector } from '@/store'

import { ChoiceFilmTicketsComponent } from './ChoiceFilmTicketsComponent'

export const ChoiceFilmTickets = () => {
  const seance = useAppSelector((state) => state.filmSchedule.currentSeance)

  if (!seance) {
    return null
  }

  return <ChoiceFilmTicketsComponent seance={seance} />
}
