import { Typography } from '@/shared/uikit'

import s from '../ui/styles.module.css'

interface Props {
  date?: string
}

export const WatchDate = ({ date }: Props) => (
  <>
    <Typography className="centered" variant="sub2" text="в прокате" />
    <div className={s.watchDate}>{date || 'с 1 июня по 15 июля'}</div>
  </>
)
