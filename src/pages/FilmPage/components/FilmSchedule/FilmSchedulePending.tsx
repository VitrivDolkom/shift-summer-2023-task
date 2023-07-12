import waiting from '@/assets/gif/waiting.gif'
import { Typography } from '@/shared/uikit'

import s from './styles.module.css'

export const FilmSchedulePending = () => (
  <div className={s.pending}>
    <img src={waiting} alt="" />
    <Typography tag="span" variant="t1" text="Расписание загружается ...  " />
  </div>
)
