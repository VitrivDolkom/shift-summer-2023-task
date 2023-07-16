import { SeancePlace } from '@/shared/components'

import s from './styles.module.css'

export const SeancePlaceTypes = () => (
  <div className={s.types}>
    <SeancePlace isSelected={false} placeType="ECONOM" />
    <SeancePlace isSelected={false} placeType="BLOCKED" />
    <SeancePlace isSelected={false} placeType="COMFORT" />
    <SeancePlace isSelected={true} placeType="ECONOM" />
    <SeancePlace isSelected={true} placeType="COMFORT" />
  </div>
)
