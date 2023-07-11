import posterTitle from '@/assets/img/posterTitle.svg'
import { Header } from '@/modules/Header'
import { PosterFilms } from '@/modules/PosterFilms'
import { Typography } from '@/shared/uikit'

import s from './styles.module.css'

export const PosterPage = () => (
  <div>
    <Header type="withButton" />
    <main>
      <div className={s.title}>
        <img src={posterTitle} alt="афиша" />
        <Typography tag="h1" variant="t2" text=" на сегодня" />
      </div>
      <PosterFilms />
    </main>
  </div>
)
