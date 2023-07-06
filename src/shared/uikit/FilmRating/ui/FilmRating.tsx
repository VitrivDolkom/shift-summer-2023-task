import emptyStar from './img/emptyStar.svg'
import star from './img/star.svg'
import s from './styles.module.css'

interface FilmRatingProps {
  rating: number
  company: string
}

export const FilmRating = ({ rating, company }: FilmRatingProps) => (
  <>
    <div className={s.stars}>
      {rating > 2 ? <img src={star} alt="" /> : <img src={emptyStar} alt="" />}
      {rating > 4 ? <img src={star} alt="" /> : <img src={emptyStar} alt="" />}
      {rating > 6 ? <img src={star} alt="" /> : <img src={emptyStar} alt="" />}
      {rating > 8 ? <img src={star} alt="" /> : <img src={emptyStar} alt="" />}
      {rating > 9.5 ? <img src={star} alt="" /> : <img src={emptyStar} alt="" />}
    </div>
    <div className={s.rating}>{company} - {rating}</div>
  </>
)
