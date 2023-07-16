import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import s from './styles.module.css'

const arr = [1, 2, 3, 4, 5, 6, 7]

export const PosterFilmsSkeleton = () => (
  <div className={s.list}>
    {arr.map((film, index) => (
      <div key={index} className={s.item}>
        <div className={s.top}>
          <Skeleton count={25} />
        </div>
        <div className={s.center}>
          <Skeleton count={5} />
        </div>
        <div className={s.top}>
          <Skeleton count={2} />
        </div>
      </div>
    ))}
  </div>
)
