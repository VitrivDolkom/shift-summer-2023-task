import emptyStar from './img/emptyStar.svg'
import star from './img/star.svg'
import s from './styles.module.css'

interface Props {
  rating: number
}

export const FilmRating = ({ rating }: Props) => (
  <>
    <div className={s.stars}>
      <img src={star} alt="" />
      <img src={star} alt="" />
      <img src={star} alt="" />
      <img src={emptyStar} alt="" />
    </div>
    <div className={s.rating}>Кинопоиск - {rating}</div>
  </>
)
