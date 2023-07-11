import { Header } from '@/modules/Header'
import { PosterFilms } from '@/modules/PosterFilms'

import posterTitle from '@/assets/img/posterTitle.svg'
import s from './styles.module.css'

export const PosterPage = () => (
  <div>
    <Header type="withButton" />
    <main>
      <div className={s.title}>
        <img src={posterTitle} alt="афиша" />
        <h1 className={s.subtitle}> на сегодня</h1>
      </div>
      <PosterFilms />
    </main>
  </div>
)
