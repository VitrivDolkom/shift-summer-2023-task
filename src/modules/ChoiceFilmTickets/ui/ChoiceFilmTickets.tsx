import { useAppSelector } from '@/store'

export const ChoiceFilmTickets = () => {
  const seance = useAppSelector((state) => state.filmSchedule.currentSeance)

  return <div>{seance?.time}</div>
}
