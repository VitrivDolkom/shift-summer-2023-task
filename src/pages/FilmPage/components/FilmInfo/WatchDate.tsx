import { Translation } from 'react-i18next'

import { Typography } from '@/shared/uikit'

import s from './styles.module.css'

interface Props {
  date?: string
}

export const WatchDate = ({ date }: Props) => (
  <Translation>
    {(t) => (
      <>
        <Typography tag="p" className="centered" variant="sub2" text={t('film.playing')} />
        <div className={s.watchDate}>{date || t('film.playing_date')}</div>
      </>
    )}
  </Translation>
)
