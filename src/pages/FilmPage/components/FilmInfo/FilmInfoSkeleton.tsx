import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import s from './styles.module.css'

export const FilmInfoSkeleton = () => (
  <div className={s.skeleton}>
    <div className={s.leftSkeleton}>
      <Skeleton count={45} />
    </div>

    <div className={s.rightSkeleton}>
      <div className={s.mainInfoSkeleton}>
        <Skeleton count={3} />
      </div>

      <div className={s.directorSkeleton}>
        <Skeleton count={5} />
      </div>
      <div className={s.descriptionSkeleton}>
        <Skeleton count={10} />
      </div>
    </div>
  </div>
)
