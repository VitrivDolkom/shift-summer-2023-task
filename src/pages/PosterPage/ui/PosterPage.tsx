import { Translation } from 'react-i18next'

import posterTitle from '@/assets/img/posterTitle.svg'
import { Header } from '@/shared/components'
import { Typography } from '@/shared/uikit'

import { PosterFilms } from '../components'

import s from './styles.module.css'

export const PosterPage = () => (
  <Translation>
    {(t) => (
      <>
        <Header type="withButton" />
        <main>
          <div className={s.title}>
            <img src={posterTitle} alt="афиша" />
            <Typography tag="h1" variant="t2" text={t('poster_title')} />
          </div>
          <PosterFilms />
        </main>
      </>
    )}
  </Translation>
)
