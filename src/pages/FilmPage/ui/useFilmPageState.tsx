import { useMemo, useState } from 'react'

export const useFilmPageState = () => {
  const [schedule, setSchedule] = useState<api.Schedule>()
  const [seance, setSeance] = useState<api.ScheduleSeance>()

  const [personDto, setPersonDto] = useState<api.CreatePaymentPersonDto>({
    firstname: '',
    lastname: '',
    middlename: '',
    phone: ''
  })

  const [tickets, setTickets] = useState<api.FullTicketInfo[]>([])
  const price = useMemo(() => tickets.reduce((acc, ticket) => acc + ticket.price, 0), [tickets])

  const [ticketsOrder, setTicketsOrder] = useState<api.CreateCinemaPaymentDto>()

  return {
    schedule,
    setSchedule,
    seance,
    setSeance,
    tickets,
    setTickets,
    price,
    personDto,
    setPersonDto,
    ticketsOrder,
    setTicketsOrder
  }
}
