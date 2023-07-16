import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import s from './styles.module.css'

const arr = [1, 2, 3, 4, 5]

export const UserOrdersSkelton = () => (
  <div className={s.list}>
    {arr.map((order, index) => (
      <div key={index} className={s.item}>
        <div className={s.top}>
          <div className={s.topLeft}>
            <Skeleton count={1} />
          </div>
          <div className={s.topRight}>
            <Skeleton count={1} />
          </div>
        </div>
        <div className={s.center}>
          <Skeleton count={5} />
        </div>
        <div className={s.top}>
          <div className={s.topLeft}>
            <Skeleton count={1} />
          </div>
          <div className={s.topRight}>
            <Skeleton count={1} />
          </div>
        </div>
      </div>
    ))}
  </div>
)
