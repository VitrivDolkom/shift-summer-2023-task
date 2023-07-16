/* eslint-disable @typescript-eslint/no-unused-vars */

namespace api {
  interface BaseResponse {
    success: boolean
    reason: string
  }

  interface CreateOtpDto {
    phone: string
  }

  interface OtpResponse extends BaseResponse {
    retryDelay: number
  }

  interface SignInDto {
    phone: string
    code: number
  }

  export interface User {
    phone: string
    firstname?: string
    middlename?: string
    lastname?: string
    email?: string
    city?: string
  }

  export interface UserProfile {
    user: User
    token: string
  }

  type SignInResponse = BaseResponse & UserProfile

  interface SessionResponse extends BaseResponse {
    user: User
  }

  type Profession = 'ACTOR' | 'DIRECTOR'
  export interface FilmPerson {
    id: string
    professions: Profession
    fullName: string
  }

  interface FilmUserRating {
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

  type AgeRating = 'G'
  type Genre = string

  interface FilmsResponse extends BaseResponse {
    films: Film[]
  }

  interface FilmResponse extends BaseResponse {
    film: Film
  }

  interface CancelCinemaOrderDto {
    orderId: string
  }

  type HallName = 'Red' | 'Blue' | 'Green'
  type SeancePlaceType = 'COMFORT' | 'ECONOM' | 'BLOCKED'

  interface FilmSeancePlace {
    price: number
    type: SeancePlaceType
  }

  interface FilmHall {
    name: HallName
    places: FilmSeancePlace[][]
  }

  interface FilmTicketSeance {
    date: string
    time: string
  }

  interface Ticket {
    filmId: string
    row: number
    column: number
    seance: FilmTicketSeance
    phone: string
  }

  export interface ScheduleSeance {
    time: string
    hall: FilmHall
    payedTickets: Ticket[]
  }

  export interface Schedule {
    date: string
    seances: ScheduleSeance[]
  }

  export interface ScheduleResponse extends BaseResponse {
    schedules: Schedule[]
  }

  interface CreatePaymentPersonDto {
    firstname: string
    lastname: string
    middlename: string
    phone: string
  }

  interface CreatePaymentDebitCardDto {
    pan: string
    expireDate: string
    cvv: string
  }

  type CreatePaymentSeanceDto = FilmTicketSeance

  interface CreatePaymentTicketsDto {
    row: number
    column: number
  }

  type FullTicketInfo = CreatePaymentTicketsDto & FilmSeancePlace

  interface CreateCinemaPaymentDto {
    filmId: string
    person: CreatePaymentPersonDto
    debitCard: CreatePaymentDebitCardDto
    seance: FilmTicketSeance
    tickets: CreatePaymentTicketsDto[]
  }

  interface CinemaOrder {
    filmName: string
    orderNumber: number
    tickets: Ticket[]
    phone: string
    status: 'PAYED' | 'CANCELED'
  }

  interface PaymentResponse extends BaseResponse {
    order: CinemaOrder
  }

  interface CinemaOrdersResponse extends BaseResponse {
    orders: CinemaOrder[]
  }

  interface CreateAuthorizedRequestDto {
    token: string
  }

  interface CancelUserOrderDto {
    orderId: string
    token: string
  }
}
